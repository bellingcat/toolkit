import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs, missingEnv, isMain, args, requireEnv } from './cli.mjs';

// Runs `fn` with process.exit and the console captured, so the wrappers can be
// tested for what a caller actually sees: the message and the exit code.
// process.exit is made to throw, because the real one never returns and the
// code after it must not run.
function capture(fn) {
  const realExit = process.exit;
  const realError = console.error;
  const realWarn = console.warn;
  const output = [];
  let code;

  process.exit = (c) => { code = c; throw new Error('__exit__'); };
  console.error = (...a) => output.push(a.join(' '));
  console.warn = (...a) => output.push(a.join(' '));
  try {
    fn();
  } catch (e) {
    if (e.message !== '__exit__') throw e;
  } finally {
    process.exit = realExit;
    console.error = realError;
    console.warn = realWarn;
  }
  return { code, output: output.join('\n') };
}

test('parseArgs returns the values in the order named', () => {
  assert.deepEqual(parseArgs(['old', 'new'], ['oldSlug', 'newSlug']), ['old', 'new']);
});

// Replaces the .trim() that add-tool.mjs applied by hand — and applied before
// its own missing-argument check, so a missing argument threw a TypeError
// instead of printing usage.
test('parseArgs trims surrounding whitespace', () => {
  assert.deepEqual(parseArgs(['  Some Tool  '], ['toolName']), ['Some Tool']);
});

test('parseArgs ignores arguments beyond those named', () => {
  assert.deepEqual(parseArgs(['a', 'b'], ['first']), ['a']);
});

test('parseArgs throws naming the missing argument', () => {
  assert.throws(() => parseArgs(['old'], ['oldSlug', 'newSlug']), /newSlug/);
});

test('parseArgs treats a whitespace-only argument as missing', () => {
  assert.throws(() => parseArgs(['   '], ['toolName']), /toolName/);
});

test('missingEnv lists the names absent from the environment', () => {
  assert.deepEqual(missingEnv({ A: 'x' }, ['A', 'B']), ['B']);
});

test('missingEnv counts an empty value as missing', () => {
  assert.deepEqual(missingEnv({ A: '' }, ['A']), ['A']);
});

test('isMain is true when the module is the script being run', () => {
  assert.equal(isMain('file:///r/src/move-space.mjs', '/r/src/move-space.mjs'), true);
});

test('isMain is false when the module was imported by another script', () => {
  assert.equal(isMain('file:///r/src/move-space.mjs', '/r/src/publish-tool.mjs'), false);
});

// args reads process.argv itself, so the ten call sites stay a single line.
function withArgv(argv, fn) {
  const real = process.argv;
  process.argv = ['node', 'script.mjs', ...argv];
  try { return fn(); } finally { process.argv = real; }
}

test('args prints usage and exits 1 when an argument is missing', () => {
  const usage = 'Usage: node src/rename-space.mjs <oldSlug> <newSlug>';
  const { code, output } = capture(() =>
    withArgv(['old'], () => args(usage, 'oldSlug', 'newSlug')));

  assert.equal(code, 1);
  assert.match(output, /newSlug/);
  assert.match(output, /Usage: node src\/rename-space\.mjs/);
});

test('args returns the values when nothing is missing', () => {
  assert.deepEqual(withArgv(['alpha'], () => args('Usage: ...', 'toolName')), ['alpha']);
});

// move-space.mjs fails hard: the category is a required publish input, so
// skipping the move would leave the tool in the wrong collection.
test('requireEnv exits 1 naming every missing variable by default', () => {
  const { code, output } = capture(() => requireEnv(['A', 'B'], { env: {} }));

  assert.equal(code, 1);
  assert.match(output, /A/);
  assert.match(output, /B/);
});

// rename-space.mjs skips instead: a rename with no GitBook token should leave
// the repo rename standing rather than fail the job.
test('requireEnv exits 0 when told to skip', () => {
  const { code } = capture(() => requireEnv(['A'], { env: {}, skip: true }));
  assert.equal(code, 0);
});

test('requireEnv does not exit when every variable is set', () => {
  const { code } = capture(() => requireEnv(['A'], { env: { A: 'x' } }));
  assert.equal(code, undefined);
});
