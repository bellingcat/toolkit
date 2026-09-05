import { test } from 'node:test';
import assert from 'node:assert/strict';
import toolsPkg from './tools.mjs';
import { ORG_ID } from './config.mjs';

const { deleteSpace, deleteTeam } = toolsPkg;

// Stands in for a fetch Response as apiCall consumes it: a status, an .ok flag,
// and headers it probes for rate limits and content type. Deletes answer with
// no body, so content-type is absent and apiCall hands back the response itself.
function stubFetch(status) {
  const calls = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url, method: init.method });
    return { status, ok: status >= 200 && status < 300, headers: { get: () => null } };
  };
  return calls;
}

test.afterEach(() => { delete globalThis.fetch; });

test('deleteSpace: reports true when GitBook deleted the space', async () => {
  const calls = stubFetch(205);
  assert.equal(await deleteSpace('sp-1'), true);
  assert.deepEqual(calls, [{ url: 'https://api.gitbook.com/v1/spaces/sp-1', method: 'DELETE' }]);
});

// 204 is "the space did not exist" — the answer a re-run of a partly-failed
// teardown gets, and a success rather than an error.
test('deleteSpace: reports false when the space was already gone', async () => {
  stubFetch(204);
  assert.equal(await deleteSpace('sp-1'), false);
});

test('deleteSpace: throws on an unexpected success status', async () => {
  stubFetch(200);
  await assert.rejects(() => deleteSpace('sp-1'), /Failed to delete space sp-1: HTTP 200/);
});

test('deleteTeam: reports true when GitBook deleted the team', async () => {
  const calls = stubFetch(205);
  assert.equal(await deleteTeam('tm-1'), true);
  assert.deepEqual(calls, [{
    url: `https://api.gitbook.com/v1/orgs/${ORG_ID}/teams/tm-1`,
    method: 'DELETE',
  }]);
});

test('deleteTeam: reports false when the team was already gone', async () => {
  stubFetch(204);
  assert.equal(await deleteTeam('tm-1'), false);
});
