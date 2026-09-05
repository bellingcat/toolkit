import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import toolsPkg from './tools.mjs';

const { removeTool, publishTool } = toolsPkg;

// tools.mjs reads and writes paths relative to the working directory, so these
// run against a throwaway repo laid out the way gitbook/ is.
function withFixture(tools, summary, fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'toolkit-'));
  const cwd = process.cwd();

  fs.mkdirSync(path.join(dir, 'gitbook', 'tools'), { recursive: true });
  for (const { slug, title } of tools) {
    const toolDir = path.join(dir, 'gitbook', 'tools', slug);
    fs.mkdirSync(toolDir);
    fs.writeFileSync(path.join(toolDir, 'README.md'), `# ${title}\n\n## URL\n\nhttps://example.com\n`);
    fs.writeFileSync(path.join(toolDir, 'tool.json'), JSON.stringify({ draft: true, tags: [] }));
  }
  fs.writeFileSync(path.join(dir, 'gitbook', 'SUMMARY.md'), summary);

  process.chdir(dir);
  try {
    return fn(dir);
  } finally {
    process.chdir(cwd);
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const entry = (slug, title) => `  * [${title}](tools/${slug}/README.md)\n`;

// The behaviour change: remove-tool.yml's input was documented as the folder
// name because removeTool only ever matched one. It now takes either form, the
// way publish-tool.yml's input always has.
test('removeTool accepts a display name', () => {
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }], entry('some-tool', 'Some Tool'), (dir) => {
    removeTool('Some Tool');
    assert.equal(fs.existsSync(path.join(dir, 'gitbook', 'tools', 'some-tool')), false);
  });
});

test('removeTool still accepts a slug', () => {
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }], entry('some-tool', 'Some Tool'), (dir) => {
    removeTool('some-tool');
    assert.equal(fs.existsSync(path.join(dir, 'gitbook', 'tools', 'some-tool')), false);
  });
});

test('removeTool drops the tool from SUMMARY.md', () => {
  const summary = entry('some-tool', 'Some Tool') + entry('other', 'Other');
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }, { slug: 'other', title: 'Other' }], summary, (dir) => {
    removeTool('Some Tool');
    assert.equal(fs.readFileSync(path.join(dir, 'gitbook', 'SUMMARY.md'), 'utf-8'), entry('other', 'Other'));
  });
});

test('removeTool throws for a tool that is not in the repo', () => {
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }], '', () => {
    assert.throws(() => removeTool('Ghost Tool'), /not found/i);
  });
});

test('publishTool adds a display-named tool to SUMMARY.md and clears its draft flag', () => {
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }], '* [All Tools](more/all-tools/README.md)', (dir) => {
    publishTool('Some Tool');

    const summary = fs.readFileSync(path.join(dir, 'gitbook', 'SUMMARY.md'), 'utf-8');
    assert.match(summary, /^ {2}\* \[Some Tool\]\(tools\/some-tool\/README\.md\)$/m);

    const json = JSON.parse(fs.readFileSync(path.join(dir, 'gitbook', 'tools', 'some-tool', 'tool.json'), 'utf-8'));
    assert.equal(json.draft, undefined);
    assert.equal(typeof json.publishedAt, 'number');
  });
});

test('publishTool refuses a tool that is not in the repo', () => {
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }], '', () => {
    assert.throws(() => publishTool('Ghost Tool'), /not found/i);
  });
});

test('publishTool refuses a tool that is already in SUMMARY.md', () => {
  withFixture([{ slug: 'some-tool', title: 'Some Tool' }], entry('some-tool', 'Some Tool'), () => {
    assert.throws(() => publishTool('Some Tool'), /already published/);
  });
});
