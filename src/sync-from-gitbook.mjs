/**
 * Export job: GitBook → GitHub
 *
 * For each tool space in project_items.json:
 *   - Check if there's a merged CR newer than the last-synced checkpoint
 *   - Skip (with a warning) if the repo also has unsynced commits touching the
 *     tool — both sides changed, and exporting would clobber the repo-side
 *     edits. Reconcile manually, then re-run with --tool <slug> --ignore-conflicts.
 *   - Otherwise call POST /spaces/{id}/git/export to push content to GitHub
 *   - Update last-synced.json checkpoint
 *
 * Usage:
 *   GITBOOK_API_TOKEN=... GH_REPO_TOKEN=... node src/sync-from-gitbook.mjs [--dry-run] [--tool <slug>] [--ignore-conflicts]
 *
 * Required env vars:
 *   GITBOOK_API_TOKEN  — GitBook API token
 *   GH_REPO_TOKEN      — GitHub token with repo write access (passed to GitBook export API)
 *   GITHUB_REPOSITORY  — e.g. "bellingcat/toolkit" (set automatically in GitHub Actions)
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import matter from './frontmatter.mjs';
import pkg from './data.mjs';
import client from './ghproject-client.mjs';
const { apiCall } = pkg;

const GH_REPO_TOKEN = process.env.GH_REPO_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const REPO_BASE_URL = process.env.GITHUB_REPO_URL
  || `https://github.com/${GITHUB_REPOSITORY}.git`;
// Embed token as basic auth so GitBook can push to the repo
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

// Bootstrap: use the tool's last-known updated frontmatter date as initial checkpoint
function getToolUpdatedAt(toolSlug) {
  const readmePath = path.join('gitbook', 'tools', toolSlug, 'README.md');
  if (!fs.existsSync(readmePath)) return null;
  const { data } = matter(fs.readFileSync(readmePath, 'utf-8'));
  return data.updated ? new Date(data.updated).toISOString() : null;
}

// Returns the most recent commit ("<short-hash> <subject>") touching the tool's
// directory since the given ISO timestamp, or null if there are none. Commits
// created by the GitBook export itself ("Sync: Export ... from GitBook") are
// excluded — those are GitBook content, not repo-side edits.
function lastUnsyncedCommit(toolSlug, since) {
  const result = execSync(
    `git log --since="${since}" --grep="^Sync: Export" --invert-grep --format="%h %s" -1 -- "gitbook/tools/${toolSlug}/"`,
    { encoding: 'utf-8' }
  );
  return result.trim() || null;
}

async function getMostRecentMergedCR(spaceId) {
  const data = await apiCall(
    `https://api.gitbook.com/v1/spaces/${spaceId}/change-requests?` +
      new URLSearchParams({ status: 'merged', limit: '1' }),
    { method: 'GET' }
  );
  return data.items?.[0] ?? null;
}

async function exportSpace(spaceId, toolSlug) {
  return await apiCall(`https://api.gitbook.com/v1/spaces/${spaceId}/git/export`, {
    method: 'POST',
    body: {
      url: REPO_URL,
      ref: GIT_REF,
      repoProjectDirectory: `gitbook/tools/${toolSlug}`,
      commitMessage: `Sync: Export ${toolSlug} from GitBook`,
      force: false,
    },
  });
}

async function main() {
  const items = client.fetchAllItems();
  const checkpoint = loadCheckpoint();
  let exported = 0;
  let skipped = 0;
  let conflicts = 0;
  let errors = 0;
  const exportedSlugs = [];

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

    // Bootstrap: if no checkpoint entry, use the tool's last-known updated date
    if (!(toolSlug in checkpoint)) {
      checkpoint[toolSlug] = getToolUpdatedAt(toolSlug) ?? new Date(0).toISOString();
    }

    let cr;
    try {
      cr = await getMostRecentMergedCR(spaceId);
    } catch (e) {
      console.error(`ERROR fetching CRs for ${toolSlug} (${spaceId}): ${e.message}`);
      errors++;
      continue;
    }

    if (!cr) {
      skipped++;
      continue;
    }

    if (cr.updatedAt <= checkpoint[toolSlug]) {
      skipped++;
      continue;
    }

    // Both sides changed since the last sync: exporting would clobber the
    // repo-side commits. Leave the checkpoint alone so this keeps flagging
    // until a human reconciles.
    const conflictCommit = IGNORE_CONFLICTS ? null : lastUnsyncedCommit(toolSlug, checkpoint[toolSlug]);
    if (conflictCommit) {
      console.log(
        `::warning::Sync conflict for ${toolSlug}: repo has commits since ${checkpoint[toolSlug]} ` +
        `(latest: ${conflictCommit}) and GitBook has a newer merged change request ` +
        `(#${cr.number} ${cr.subject}, merged ${cr.updatedAt}). Skipping export to avoid ` +
        `clobbering repo changes. Reconcile manually, then re-run with --tool ${toolSlug} --ignore-conflicts.`
      );
      conflicts++;
      continue;
    }

    console.log(`Exporting ${toolSlug} (CR updated ${cr.updatedAt})`);

    if (!DRY_RUN) {
      try {
        // Log the response — the export is async and may include signals
        // (e.g. a revision id, or that there was nothing to commit) that a
        // no-commit export leaves otherwise indistinguishable from a slow one.
        const result = await exportSpace(spaceId, toolSlug);
        console.log(`  response: ${JSON.stringify(result)}`);
        checkpoint[toolSlug] = new Date().toISOString();
        exported++;
        exportedSlugs.push(toolSlug);
      } catch (e) {
        console.error(`ERROR exporting ${toolSlug} (${spaceId}): ${e.message}`);
        errors++;
      }
    } else {
      checkpoint[toolSlug] = new Date().toISOString();
      exported++;
    }
  }

  saveCheckpoint(checkpoint);

  // Tell the workflow which tools were exported so it can wait for GitBook's
  // async pushes to land on main before building.
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `exported=${exportedSlugs.join(' ')}\n`);
  }

  console.log('');
  console.log(`Done.${DRY_RUN ? ' (dry run)' : ''}`);
  console.log(`  Exported:  ${exported}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Conflicts: ${conflicts}`);
  console.log(`  Errors:    ${errors}`);
}

main();
