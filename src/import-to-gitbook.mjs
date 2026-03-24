/**
 * Import job: GitHub → GitBook
 *
 * For each tool space in project_items.json:
 *   - Skip if no commits have touched gitbook/tools/{slug}/ since last-synced checkpoint
 *   - Otherwise call POST /spaces/{id}/git/import to push current repo content into GitBook
 *
 * Import does NOT create a change request — it updates space content directly.
 * Running this after an export is safe: if content matches, GitBook is a no-op.
 *
 * Usage:
 *   GITBOOK_API_TOKEN=... GH_REPO_TOKEN=... node src/import-to-gitbook.mjs [--dry-run]
 *
 * Required env vars:
 *   GITBOOK_API_TOKEN  — GitBook API token
 *   GH_REPO_TOKEN      — GitHub token with repo read access (passed to GitBook import API)
 *   GITHUB_REPOSITORY  — e.g. "bellingcat/toolkit" (set automatically in GitHub Actions)
 */

import fs from 'fs';
import { execSync } from 'child_process';
import pkg from './data.mjs';
import client from './ghproject-client.mjs';
const { apiCall } = pkg;

const GH_REPO_TOKEN = process.env.GH_REPO_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const REPO_BASE_URL = process.env.GITHUB_REPO_URL
  || `https://github.com/${GITHUB_REPOSITORY}.git`;
// Embed token as basic auth so GitBook can read from the repo
const REPO_URL = REPO_BASE_URL.replace('https://', `https://x-access-token:${GH_REPO_TOKEN}@`);
const GIT_REF = 'refs/heads/main';
const CHECKPOINT_FILE = 'last-synced.json';
const DRY_RUN = process.argv.includes('--dry-run');

function getField(item, fieldName) {
  return item.fieldValues.nodes.find(n => n.field?.name === fieldName)?.text;
}

function loadCheckpoint() {
  if (fs.existsSync(CHECKPOINT_FILE)) {
    return JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'));
  }
  return {};
}

// Returns true if any commits have touched the tool's directory since the given ISO timestamp.
function hasCommitsSince(toolSlug, since) {
  const result = execSync(
    `git log --since="${since}" --format=%H -- "gitbook/tools/${toolSlug}/"`,
    { encoding: 'utf-8' }
  );
  return result.trim().length > 0;
}

async function importSpace(spaceId, toolSlug) {
  return await apiCall(`https://api.gitbook.com/v1/spaces/${spaceId}/git/import`, {
    method: 'POST',
    body: {
      url: REPO_URL,
      ref: GIT_REF,
      repoProjectDirectory: `gitbook/tools/${toolSlug}`,
      force: false,
    },
  });
}

async function main() {
  const items = client.fetchAllItems();
  const checkpoint = loadCheckpoint();
  let imported = 0;
  let skipped = 0;
  let errors = 0;

  for (const item of items) {
    const spaceId = getField(item, 'Space ID');
    const toolSlug = getField(item, 'Tool ID');

    if (!spaceId || !toolSlug) {
      skipped++;
      continue;
    }

    const since = checkpoint[spaceId] ?? new Date(0).toISOString();
    if (!hasCommitsSince(toolSlug, since)) {
      skipped++;
      continue;
    }

    console.log(`Importing ${toolSlug} (changes since ${since})`);

    if (!DRY_RUN) {
      try {
        await importSpace(spaceId, toolSlug);
        imported++;
      } catch (e) {
        console.error(`ERROR importing ${toolSlug} (${spaceId}): ${e.message}`);
        errors++;
      }
    } else {
      imported++;
    }
  }

  console.log('');
  console.log(`Done.${DRY_RUN ? ' (dry run)' : ''}`);
  console.log(`  Imported: ${imported}`);
  console.log(`  Skipped:  ${skipped}`);
  console.log(`  Errors:   ${errors}`);
}

main();
