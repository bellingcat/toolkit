import { test } from 'node:test';
import assert from 'node:assert/strict';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import client from './ghproject-client.mjs';

function stubGh(t, implementation) {
  const spawn = t.mock.method(childProcess, 'spawnSync', implementation);
  syncBuiltinESMExports();
  t.after(() => {
    spawn.mock.restore();
    syncBuiltinESMExports();
  });
  const wait = t.mock.method(Atomics, 'wait', () => 'timed-out');
  t.mock.method(console, 'warn', () => {});
  return { spawn, wait };
}

const success = data => ({ status: 0, stdout: JSON.stringify(data), stderr: '' });
const failure = status => ({ status: 1, stdout: '', stderr: `gh: HTTP ${status}\n` });

test('GraphQL reads retry transient server errors with exponential backoff', t => {
  const responses = [failure(502), failure(503), failure(504), success({ data: { ok: true } })];
  const { spawn, wait } = stubGh(t, () => responses.shift());

  assert.deepEqual(client.executeMutation('query($number: Int!) { viewer { login } }', { number: 1 }),
    { data: { ok: true } });
  assert.equal(spawn.mock.callCount(), 4);
  assert.deepEqual(wait.mock.calls.map(call => call.arguments[3]), [1000, 2000, 4000]);
  for (const call of spawn.mock.calls) {
    assert.deepEqual(call.arguments, [
      'gh', ['api', 'graphql', '-f', 'query=query($number: Int!) { viewer { login } }', '-F', 'number=1'],
      { encoding: 'utf-8' },
    ]);
  }
});

test('GraphQL reads stop after three retries and preserve the final error', t => {
  const { spawn, wait } = stubGh(t, () => failure(504));

  assert.throws(() => client.executeMutation('query { viewer { login } }'),
    /gh api graphql failed:\ngh: HTTP 504/);
  assert.equal(spawn.mock.callCount(), 4);
  assert.equal(wait.mock.callCount(), 3);
});

for (const status of [401, 403, 422]) {
  test(`GraphQL reads do not retry HTTP ${status}`, t => {
    const { spawn, wait } = stubGh(t, () => failure(status));

    assert.throws(() => client.executeMutation('query { viewer { login } }'),
      new RegExp(`HTTP ${status}`));
    assert.equal(spawn.mock.callCount(), 1);
    assert.equal(wait.mock.callCount(), 0);
  });
}

test('GraphQL mutations are not replayed after a gateway timeout', t => {
  const { spawn, wait } = stubGh(t, () => failure(504));

  assert.throws(() => client.executeMutation('\n    mutation { addProjectV2DraftIssue { projectItem { id } } }'),
    /HTTP 504/);
  assert.equal(spawn.mock.callCount(), 1);
  assert.equal(wait.mock.callCount(), 0);
});

test('GraphQL process errors are propagated without retrying', t => {
  const error = new Error('gh executable not found');
  const { spawn, wait } = stubGh(t, () => ({ error }));

  assert.throws(() => client.executeMutation('query { viewer { login } }'), error);
  assert.equal(spawn.mock.callCount(), 1);
  assert.equal(wait.mock.callCount(), 0);
});

test('GraphQL response errors are propagated without retrying', t => {
  const { spawn, wait } = stubGh(t, () => success({ errors: [{ message: 'Invalid query' }] }));

  assert.throws(() => client.executeMutation('query { viewer { login } }'), /Invalid query/);
  assert.equal(spawn.mock.callCount(), 1);
  assert.equal(wait.mock.callCount(), 0);
});

test('fetchAllItems retries a failed page without losing items or advancing the cursor', t => {
  const responses = [
    success({ data: { organization: { projectV2: { id: 'project-id' } } } }),
    success({ data: { node: { items: {
      nodes: [{ id: 'item-1' }],
      pageInfo: { hasNextPage: true, endCursor: 'page-1' },
    } } } }),
    failure(504),
    success({ data: { node: { items: {
      nodes: [{ id: 'item-2' }],
      pageInfo: { hasNextPage: false, endCursor: null },
    } } } }),
  ];
  const { spawn } = stubGh(t, () => responses.shift());

  assert.deepEqual(client.fetchAllItems(), [{ id: 'item-1' }, { id: 'item-2' }]);
  assert.equal(spawn.mock.callCount(), 4);
  const pages = spawn.mock.calls.slice(1);
  for (const call of pages) {
    assert.match(call.arguments[1][3], /items\(first: 50, after: \$after\)/);
  }
  assert.equal(pages[0].arguments[1].at(-1), 'after=');
  assert.equal(pages[1].arguments[1].at(-1), 'after=page-1');
  assert.deepEqual(pages[1].arguments, pages[2].arguments);
});
