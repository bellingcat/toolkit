import { test } from 'node:test';
import assert from 'node:assert/strict';
import { upsertProjectItem } from './add-project-item.mjs';

// Stand-in for ghproject-client, recording what the upsert asks it to do.
function stubClient(existing = null) {
  const calls = [];
  return {
    calls,
    findItemByToolId(slug) { calls.push(['find', slug]); return existing; },
    addItemToProject(slug, spaceId, teamId, title) {
      calls.push(['add', slug, spaceId, teamId, title]);
      return 'new-item-id';
    },
    updateItemFields(itemId, fields) { calls.push(['update', itemId, fields]); },
  };
}

test('upsertProjectItem: creates an item when the tool has none', () => {
  const client = stubClient(null);
  const id = upsertProjectItem(client, 'my-tool', 'space-1', 'team-1', 'My Tool');

  assert.deepEqual(client.calls, [
    ['find', 'my-tool'],
    ['add', 'my-tool', 'space-1', 'team-1', 'My Tool'],
  ]);
  assert.equal(id, 'new-item-id');
});

test('upsertProjectItem: updates the existing item instead of creating a duplicate', () => {
  const client = stubClient({ id: 'existing-id' });
  const id = upsertProjectItem(client, 'my-tool', 'space-2', 'team-2', 'My Tool');

  assert.deepEqual(client.calls, [
    ['find', 'my-tool'],
    ['update', 'existing-id', { 'Space ID': 'space-2', 'Team ID': 'team-2' }],
  ]);
  assert.equal(id, 'existing-id');
});

test('upsertProjectItem: never calls addItemToProject when an item exists', () => {
  const client = stubClient({ id: 'existing-id' });
  upsertProjectItem(client, 'my-tool', 'space-2', 'team-2', 'My Tool');
  assert.equal(client.calls.some(([kind]) => kind === 'add'), false);
});

test('upsertProjectItem: leaves Team ID alone when no team was created', () => {
  const client = stubClient({ id: 'existing-id' });
  upsertProjectItem(client, 'my-tool', 'space-2', '', 'My Tool');

  assert.deepEqual(client.calls[1], ['update', 'existing-id', { 'Space ID': 'space-2' }]);
});

test('upsertProjectItem: still passes an empty team through when creating', () => {
  const client = stubClient(null);
  upsertProjectItem(client, 'my-tool', 'space-1', '', 'My Tool');
  assert.deepEqual(client.calls[1], ['add', 'my-tool', 'space-1', '', 'My Tool']);
});
