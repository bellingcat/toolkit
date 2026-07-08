/**
 * Import job: GitHub → GitBook
 *
 * For each tool space in project_items.json:
 *   - Skip if no commits have touched gitbook/tools/{slug}/ since last-synced checkpoint
 *   - Skip (with a warning) if the space has a merged CR newer than the checkpoint —
 *     GitBook has changes the export step didn't pull down (e.g. it was skipped as a
 *     conflict, or a CR merged mid-run), and importing would clobber them. Reconcile
 *     manually, then re-run with --tool <slug> --ignore-conflicts.
 *   - Otherwise call POST /spaces/{id}/git/import to push current repo content into GitBook
 *
 * Import does NOT create a change request — it updates space content directly.
 * Running this after an export is safe: if content matches, GitBook is a no-op.
 *
 * Usage:
 *   GITBOOK_API_TOKEN=... GH_REPO_TOKEN=... node src/import-to-gitbook.mjs [--dry-run] [--tool <slug>] [--ignore-conflicts]
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
const IGNORE_CONFLICTS = process.argv.includes('--ignore-conflicts');
const TOOL_FILTER = process.argv.includes('--tool')
  ? process.argv[process.argv.indexOf('--tool') + 1]
  : null;

function getField(item, fieldName) {
  return item.fieldValues.nodes.find(n => n.field?.name === fieldName)?.text;
}

function loadCheckpoint() {
  if (fs.existsSync(CHECKPOINT_FILE)) {
    return JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'));
  }
  return {};
}

function saveCheckpoint(checkpoint) {
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(checkpoint, null, 2) + '\n');
}

// Returns true if any commits have touched the tool's directory since the
// given ISO timestamp, excluding commits created by the GitBook export
// ("Sync: Export ... from GitBook") — that content is already in GitBook,
// so it neither needs importing nor counts as a repo-side change.
function hasCommitsSince(toolSlug, since) {
  const result = execSync(
    `git log --since="${since}" --grep="^Sync: Export" --invert-grep --format=%H -- "gitbook/tools/${toolSlug}/"`,
    { encoding: 'utf-8' }
  );
  return result.trim().length > 0;
}

async function getMostRecentMergedCR(spaceId) {
  const data = await apiCall(
    `https://api.gitbook.com/v1/spaces/${spaceId}/change-requests?` +
      new URLSearchParams({ status: 'merged', limit: '1' }),
    { method: 'GET' }
  );
  return data.items?.[0] ?? null;
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
  let conflicts = 0;
  let errors = 0;

  for (const item of items) {
    const spaceId = getField(item, 'Space ID');
    const toolSlug = getField(item, 'Tool ID');

    if (!spaceId || !toolSlug) {
      skipped++;
      continue;
    }

    if (TOOL_FILTER && toolSlug !== TOOL_FILTER) {
      skipped++;
      continue;
    }

    const since = checkpoint[toolSlug] ?? new Date(0).toISOString();
    if (!hasCommitsSince(toolSlug, since)) {
      skipped++;
      continue;
    }

    // A merged CR newer than the checkpoint means GitBook has changes the
    // export step didn't pull down — importing would clobber them. Leave the
    // checkpoint alone so this keeps flagging until a human reconciles.
    if (!IGNORE_CONFLICTS) {
      let cr;
      try {
        cr = await getMostRecentMergedCR(spaceId);
      } catch (e) {
        console.error(`ERROR fetching CRs for ${toolSlug} (${spaceId}): ${e.message}`);
        errors++;
        continue;
      }
      if (cr && cr.updatedAt > since) {
        console.log(
          `::warning::Sync conflict for ${toolSlug}: repo has commits since ${since} ` +
          `and GitBook has an unexported merged change request (${cr.updatedAt}). Skipping import ` +
          `to avoid clobbering GitBook changes. Reconcile manually, then re-run with --tool ${toolSlug} --ignore-conflicts.`
        );
        conflicts++;
        continue;
      }
    }

    console.log(`Importing ${toolSlug} (changes since ${since})`);

    if (!DRY_RUN) {
      try {
        await importSpace(spaceId, toolSlug);
        checkpoint[toolSlug] = new Date().toISOString();
        imported++;
      } catch (e) {
        console.error(`ERROR importing ${toolSlug} (${spaceId}): ${e.message}`);
        errors++;
      }
    } else {
      checkpoint[toolSlug] = new Date().toISOString();
      imported++;
    }
  }

  saveCheckpoint(checkpoint);

  console.log('');
  console.log(`Done.${DRY_RUN ? ' (dry run)' : ''}`);
  console.log(`  Imported:  ${imported}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Conflicts: ${conflicts}`);
  console.log(`  Errors:    ${errors}`);
}

main();
