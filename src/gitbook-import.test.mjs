import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lastCommitSince } from './gitbook-import.mjs';

// Stand-in for spawnSync, returning a canned result and recording how it was called.
function stubRun(result) {
  const calls = [];
  const run = (cmd, args, opts) => {
    calls.push({ cmd, args, opts });
    return result;
  };
  run.calls = calls;
  return run;
}

const SINCE = '2026-01-01T00:00:00.000Z';

test('lastCommitSince: returns the commit line git printed', () => {
  const run = stubRun({ status: 0, stdout: 'abc1234 Fix a typo\n', stderr: '' });
  assert.equal(lastCommitSince('my-tool', SINCE, run), 'abc1234 Fix a typo');
});

test('lastCommitSince: returns null when git finds no commits', () => {
  const run = stubRun({ status: 0, stdout: '\n', stderr: '' });
  assert.equal(lastCommitSince('my-tool', SINCE, run), null);
});

test('lastCommitSince: throws instead of returning null when git exits non-zero', () => {
  const run = stubRun({ status: 128, stdout: '', stderr: 'fatal: not a git repository\n' });
  assert.throws(
    () => lastCommitSince('my-tool', SINCE, run),
    /git log failed for my-tool \(exit 128\)/
  );
});

// spawnSync reports a missing binary via .error, leaving stdout null.
test('lastCommitSince: throws when git cannot be spawned at all', () => {
  const run = stubRun({
    error: Object.assign(new Error('spawnSync git ENOENT'), { code: 'ENOENT' }),
    status: null,
    stdout: null,
    stderr: null,
  });
  assert.throws(() => lastCommitSince('my-tool', SINCE, run), /ENOENT/);
});

// Tool IDs come from a human-edited GitHub Project field. Passing argv directly
// keeps shell metacharacters inert; the shell string this replaced did not.
test('lastCommitSince: passes the slug as an argv element, never through a shell', () => {
  const run = stubRun({ status: 0, stdout: '', stderr: '' });
  lastCommitSince('a"; rm -rf /; echo "', SINCE, run);

  const { cmd, args, opts } = run.calls[0];
  assert.equal(cmd, 'git');
  assert.equal(opts.shell, undefined);
  assert.ok(args.includes('gitbook/tools/a"; rm -rf /; echo "/'));
});

test('lastCommitSince: passes the timestamp as one argv element', () => {
  const run = stubRun({ status: 0, stdout: '', stderr: '' });
  lastCommitSince('my-tool', SINCE, run);
  assert.ok(run.calls[0].args.includes(`--since=${SINCE}`));
});
