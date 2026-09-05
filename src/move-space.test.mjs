import { test } from 'node:test';
import assert from 'node:assert/strict';
import { moveToolSpace } from './move-space.mjs';
import { CATEGORY_COLLECTION_IDS } from './config.mjs';
import { resolveTool } from './resolve-tool.mjs';

// Records every call in order so tests can assert that nothing reached GitBook
// on the paths that are supposed to bail out first.
function stubDeps({ space = { id: 'sp-1' }, slugs = ['alpha', 'sentinel-hub-eo-browser'] } = {}) {
  const calls = [];
  return {
    calls,
    // The real resolver over a stub tool list, so these exercise the same
    // name-or-slug matching main() wires up against gitbook/tools.
    resolve: (name) => resolveTool(slugs.map((s) => ({ filename: s, title: s })), name).filename,
    findSpace: async (title) => { calls.push(['findSpace', title]); return space; },
    moveSpace: async (id, parent) => { calls.push(['moveSpace', id, parent]); },
  };
}

test('moves the space into the collection for its category', async () => {
  const deps = stubDeps();
  await moveToolSpace('alpha', 'geolocation', deps);

  assert.deepEqual(deps.calls, [
    ['findSpace', 'alpha'],
    ['moveSpace', 'sp-1', CATEGORY_COLLECTION_IDS['geolocation']],
  ]);
});

// A typo'd category must not quietly publish the tool into the wrong place, so
// this fails the publish job rather than falling back to a default.
test('rejects an unknown category before calling GitBook', async () => {
  const deps = stubDeps();

  await assert.rejects(() => moveToolSpace('alpha', 'geolocaiton', deps), /Unknown category/);
  assert.deepEqual(deps.calls, []);
});

// Publishing always files a tool under a real category — "none" was dropped
// from the choices when the collection move moved to publish time.
test('rejects "none" now that publishing always picks a real category', async () => {
  const deps = stubDeps();

  await assert.rejects(() => moveToolSpace('alpha', 'none', deps), /Unknown category/);
  assert.deepEqual(deps.calls, []);
});

// Spaces are titled by slug. A missing one means the tool was never given a
// space, which shouldn't fail a publish that is otherwise fine.
test('skips the move when no space is titled with the slug', async () => {
  const deps = stubDeps({ space: null });
  await moveToolSpace('alpha', 'geolocation', deps);

  assert.deepEqual(deps.calls, [['findSpace', 'alpha']]);
});

// Both publish-tool.yml inputs name the tool the way a person writes it, so
// this takes the display name and derives the slug the space is titled with —
// the same conversion publishTool() does.
test('looks the space up by slug, not by the display name it was given', async () => {
  const deps = stubDeps();
  await moveToolSpace('Sentinel Hub, EO Browser', 'maps-and-satellites', deps);

  assert.equal(deps.calls[0][1], 'sentinel-hub-eo-browser');
});

// publish-tool.yml passes the same tool name to publish-tool.mjs and to this
// script. A name that published fine but resolves to nothing here means the two
// have drifted, and moving on a guessed slug would file the wrong space.
test('refuses a tool that is not in the repo before calling GitBook', async () => {
  const deps = stubDeps();

  await assert.rejects(() => moveToolSpace('ghost', 'geolocation', deps), /Tool not found/);
  assert.deepEqual(deps.calls, []);
});
