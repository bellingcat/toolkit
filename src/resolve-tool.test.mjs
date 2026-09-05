import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, resolveTool } from './resolve-tool.mjs';

// Stands in for the entries getTools() returns, carrying only the two fields
// resolution looks at: the directory name and the README's H1.
function tool(filename, title = filename) {
  return { filename, title, directory: `gitbook/tools/${filename}` };
}

test('slugify lowercases and hyphenates whitespace', () => {
  assert.equal(slugify('Some Tool'), 'some-tool');
});

test('slugify strips characters a directory name cannot hold', () => {
  assert.equal(slugify('What/Where: "Who?"'), 'whatwhere-who');
});

test('slugify strips commas', () => {
  assert.equal(slugify('Bellingcat, Inc'), 'bellingcat-inc');
});

test('slugify falls back to untitled when nothing survives', () => {
  assert.equal(slugify('///'), 'untitled');
});

// The property the two-pass match relies on: a slug already in slug form comes
// back unchanged, so one rule covers both "Some Tool" and "some-tool".
test('slugify is identity on a string already in slug form', () => {
  assert.equal(slugify('some-tool'), 'some-tool');
});

test('resolves a tool by its slug', () => {
  const tools = [tool('alpha'), tool('some-tool')];
  assert.equal(resolveTool(tools, 'some-tool').filename, 'some-tool');
});

test('resolves a tool by a display name that slugifies to its slug', () => {
  const tools = [tool('alpha'), tool('some-tool', 'Some Tool')];
  assert.equal(resolveTool(tools, 'Some Tool').filename, 'some-tool');
});

// A tool renamed on GitBook keeps its directory until someone runs the rename
// workflow, so the title is the only handle its owner has for it.
test('resolves a tool by title when its directory has drifted', () => {
  const tools = [tool('old-slug', 'Brand New Name')];
  assert.equal(resolveTool(tools, 'Brand New Name').filename, 'old-slug');
});

// Slug wins, so resolution stays deterministic when one tool's title happens to
// name another tool's directory.
test('prefers a slug match over a title match', () => {
  const tools = [tool('decoy', 'Some Tool'), tool('some-tool', 'Something Else')];
  assert.equal(resolveTool(tools, 'Some Tool').filename, 'some-tool');
});

test('throws naming the input and the slug it looked for', () => {
  const tools = [tool('alpha')];
  assert.throws(() => resolveTool(tools, 'Ghost Tool'), /"Ghost Tool".*ghost-tool/s);
});

test('throws on an empty input rather than resolving it', () => {
  assert.throws(() => resolveTool([tool('untitled')], ''), /not found/i);
});
