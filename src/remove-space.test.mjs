import { test } from 'node:test';
import assert from 'node:assert/strict';
import { removeToolResources } from './remove-space.mjs';

// Mirrors the shape findItemByToolId returns: field values carry the field's
// name alongside its text, so the reader has to match on name.
function projectItem(fields) {
  return {
    id: 'item-1',
    fieldValues: {
      nodes: Object.entries(fields).map(([name, text]) => ({ text, field: { name } })),
    },
  };
}

// Records every teardown call in order so tests can assert on sequencing.
// `deleted` reports what GitBook's 205 means (this call did the deleting);
// false stands in for a 204, i.e. the resource was already gone.
function stubDeps({ item = null, space = null, deleted = true, failSpace = false } = {}) {
  const calls = [];
  return {
    calls,
    findItemByToolId: (slug) => { calls.push(['findItem', slug]); return item; },
    findSpace: async (title) => { calls.push(['findSpace', title]); return space; },
    deleteSpace: async (id) => {
      calls.push(['deleteSpace', id]);
      if (failSpace) throw new Error('GitBook is down');
      return deleted;
    },
    deleteTeam: async (id) => { calls.push(['deleteTeam', id]); return deleted; },
    removeItemFromProject: (slug) => { calls.push(['removeItem', slug]); },
  };
}

test('reads both IDs off the project item and tears all three down', async () => {
  const deps = stubDeps({ item: projectItem({ 'Tool ID': 'alpha', 'Space ID': 'sp-1', 'Team ID': 'tm-1' }) });
  await removeToolResources('alpha', deps);

  assert.deepEqual(deps.calls, [
    ['findItem', 'alpha'],
    ['deleteSpace', 'sp-1'],
    ['deleteTeam', 'tm-1'],
    ['removeItem', 'alpha'],
  ]);
});

test('deletes the project item last, after the IDs it holds have been used', async () => {
  const deps = stubDeps({ item: projectItem({ 'Space ID': 'sp-1', 'Team ID': 'tm-1' }) });
  await removeToolResources('alpha', deps);

  const names = deps.calls.map(([name]) => name);
  assert.equal(names.at(-1), 'removeItem');
});

// The item is the only record of the space and team IDs, so a failure partway
// through must leave it in place for the re-run to read.
test('leaves the project item alone when the space delete fails', async () => {
  const deps = stubDeps({ item: projectItem({ 'Space ID': 'sp-1', 'Team ID': 'tm-1' }), failSpace: true });

  await assert.rejects(() => removeToolResources('alpha', deps), /GitBook is down/);
  assert.deepEqual(deps.calls.map(([name]) => name), ['findItem', 'deleteSpace']);
});

// Spaces are titled by slug, so they stay findable without a project item.
test('falls back to finding the space by slug when there is no project item', async () => {
  const deps = stubDeps({ item: null, space: { id: 'sp-9' } });
  await removeToolResources('alpha', deps);

  assert.deepEqual(deps.calls, [
    ['findItem', 'alpha'],
    ['findSpace', 'alpha'],
    ['deleteSpace', 'sp-9'],
  ]);
});

// Teams are titled by the tool's display name, which a slug doesn't reliably
// reproduce ("cr-title" vs "CR Title"), so there is no fallback lookup.
test('skips the team when no project item records its ID', async () => {
  const deps = stubDeps({ item: null, space: { id: 'sp-9' } });
  await removeToolResources('alpha', deps);

  assert.equal(deps.calls.some(([name]) => name === 'deleteTeam'), false);
});

test('skips the team when the project item has a blank Team ID', async () => {
  const deps = stubDeps({ item: projectItem({ 'Space ID': 'sp-1', 'Team ID': '' }) });
  await removeToolResources('alpha', deps);

  assert.deepEqual(deps.calls.map(([name]) => name), ['findItem', 'deleteSpace', 'removeItem']);
});

test('skips the space when neither the item nor a lookup finds one', async () => {
  const deps = stubDeps({ item: null, space: null });
  await removeToolResources('alpha', deps);

  assert.deepEqual(deps.calls, [['findItem', 'alpha'], ['findSpace', 'alpha']]);
});

// A re-run of a partly-failed teardown gets 204s for what is already gone.
// That is a success, not a reason to stop before the project item.
test('treats already-deleted resources as success and still clears the item', async () => {
  const deps = stubDeps({ item: projectItem({ 'Space ID': 'sp-1', 'Team ID': 'tm-1' }), deleted: false });
  await removeToolResources('alpha', deps);

  assert.deepEqual(deps.calls.map(([name]) => name), ['findItem', 'deleteSpace', 'deleteTeam', 'removeItem']);
});
