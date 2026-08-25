import { google } from 'googleapis';
import projectFields from './ghproject-fields.mjs';
const { getProjectItems } = projectFields;
import pkg from './tools.mjs';
const { fetchMembers } = pkg;
import { syncToolIdReferences, pruneStaleRows, sortSheet, syncToolColumns } from './sheet-toolids.mjs';
import {
  columnLetter,
  a1Tab,
  tabReadRange,
  getSheetMeta,
  TOOL_ID_REFERENCE_TABS,
  MAINT_SHEET_ID_ENV,
  MAINT_TOOL_ID_REFERENCE_TABS,
  MAINT_SOURCE_TAB,
  MAINT_SYNCED_COLUMNS,
  MAINT_TYPED_COLUMNS,
} from './sheets-tab.mjs';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const TOOLS_HEADER = ['Title', 'Published', 'Last updated', 'Collection', 'Tool Space', 'Latest change request', 'Status', 'Date submitted', 'CR Author', 'CR Reviewers', 'Tool ID', 'Space ID', 'Team ID', 'Team Members'];
const MEMBERS_HEADER = ['Display Name', 'Email', 'Role', 'Last seen at', 'Joined at'];

// Project items that correspond to a tool (i.e. have a Tool ID).
function toolsItems() {
  return getProjectItems().filter((item) => {
    if (!item.toolId) {
      console.error('No tool ID for item', item.title);
      return false;
    }
    return true;
  });
}

// Maps a project item to its TOOLS_HEADER column values, keyed by header name.
function toolValues(item) {
  return {
    'Title': item.title || '',
    'Published': item.published ? 'TRUE' : '',
    'Last updated': item.updatedAt || '',
    'Collection': item.collection || '',
    'Tool Space': item.spaceUrl || '',
    'Latest change request': item.url || '',
    'Status': item.status || '',
    'Date submitted': item.submittedAt || '',
    'CR Author': item.changeRequestAuthor || '',
    'CR Reviewers': item.reviewers || '',
    'Tool ID': item.toolId || '',
    'Space ID': item.spaceId || '',
    'Team ID': item.teamId || '',
    'Team Members': item.teamMembers || '',
  };
}

// Maps a GitBook org member to its MEMBERS_HEADER column values, keyed by header name.
function memberValues(member) {
  return {
    'Display Name': member.user?.displayName || '',
    'Email': member.user?.email || '',
    'Role': member.role || '',
    'Last seen at': member.lastSeenAt || '',
    'Joined at': member.joinedAt || '',
  };
}

// Plans how to sync `items` into a sheet without clearing it: existing rows
// are matched on `matchColumn` (via `matchValue(item)`) and have their
// `header` columns updated in place (any other columns are left untouched),
// and items with no matching row are appended. `existingValues` is the
// sheet's current values (row 0 is the header), as returned by
// spreadsheets.values.get. `rowValues(item)` returns {headerName: value} for
// the managed columns.
function planSheetSync(existingValues, header, items, matchColumn, rowValues, matchValue) {
  const newHeader = existingValues[0] ? [...existingValues[0]] : [];
  let headerChanged = false;
  for (const name of header) {
    if (!newHeader.includes(name)) {
      newHeader.push(name);
      headerChanged = true;
    }
  }

  const matchCol = newHeader.indexOf(matchColumn);
  const rowByKey = new Map();
  for (let row = 1; row < existingValues.length; row++) {
    const key = existingValues[row][matchCol];
    if (key) rowByKey.set(key, row);
  }

  const cellUpdates = [];
  const appendRows = [];
  for (const item of items) {
    const values = rowValues(item);
    const row = rowByKey.get(matchValue(item));
    if (row !== undefined) {
      for (const name of header) {
        cellUpdates.push({ row, col: newHeader.indexOf(name), value: values[name] });
      }
    } else {
      const newRow = new Array(newHeader.length).fill('');
      for (const name of header) {
        newRow[newHeader.indexOf(name)] = values[name];
      }
      appendRows.push(newRow);
    }
  }

  return { header: newHeader, headerChanged, cellUpdates, appendRows };
}

// Ensures the named tab exists (creating it if necessary) and returns { sheetId, table }.
async function ensureSheetMeta(sheets, title) {
  const meta = await getSheetMeta(sheets, title);
  if (meta) return meta;

  const response = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: { requests: [{ addSheet: { properties: { title } } }] },
  });
  console.log(`Created sheet tab "${title}"`);
  return {
    sheetId: response.data.replies[0].addSheet.properties.sheetId,
    table: null,
  };
}

// Applies a plan from planSheetSync to the given sheet tab: writes the header
// (only if it changed), updates matched rows' cells, and appends new rows.
// Never clears the sheet. `typedColumns` lists header names whose values
// should be written with valueInputOption 'USER_ENTERED' so Sheets parses
// them into real booleans/dates (e.g. "TRUE" or "2026-01-15") instead of
// storing them as forced text; all other columns are written as 'RAW'.
// `headerRow` is the 1-based sheet row where the table header lives (default 1).
// `appendStartRow` is the 1-based sheet row where new rows should be written.
async function applySheetSync(sheets, title, plan, typedColumns = [], headerRow = 1, appendStartRow = 2) {
  const { header, headerChanged, cellUpdates, appendRows } = plan;

  if (headerChanged) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${a1Tab(title)}!A${headerRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: [header] },
    });
  }

  const typedCols = new Set(typedColumns.map((name) => header.indexOf(name)).filter((col) => col >= 0));

  for (const [valueInputOption, updates] of [
    ['RAW', cellUpdates.filter(({ col }) => !typedCols.has(col))],
    ['USER_ENTERED', cellUpdates.filter(({ col }) => typedCols.has(col))],
  ]) {
    if (updates.length > 0) {
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          valueInputOption,
          // row is 1-based within existingValues (0 = header); map to sheet row via headerRow
          data: updates.map(({ row, col, value }) => ({
            range: `${a1Tab(title)}!${columnLetter(col)}${row + headerRow}`,
            values: [[value]],
          })),
        },
      });
    }
  }

  if (appendRows.length > 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${a1Tab(title)}!A${appendStartRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: appendRows },
    });

    // Re-write typed columns with USER_ENTERED so Sheets parses them as booleans/dates.
    if (typedCols.size > 0) {
      const data = [];
      appendRows.forEach((rowValues, i) => {
        for (const col of typedCols) {
          data.push({
            range: `${a1Tab(title)}!${columnLetter(col)}${appendStartRow + i}`,
            values: [[rowValues[col]]],
          });
        }
      });
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { valueInputOption: 'USER_ENTERED', data },
      });
    }
  }

  const updatedRows = new Set(cellUpdates.map((update) => update.row)).size;
  console.log(`${title}: updated ${updatedRows} row(s), appended ${appendRows.length} row(s)`);
}

// Syncs `items` into `title`'s sheet tab in place, matching existing rows on
// `matchColumn` via `matchValue(item)` and updating `header`'s columns
// (via `rowValues(item)`). Unmatched items are appended; the sheet is never
// cleared and any other columns are left untouched. `typedColumns` lists
// header names to write as USER_ENTERED so Sheets recognizes booleans/dates.
// If any rows were appended, the sheet is re-sorted by its first column.
// If the sheet contains a Google Sheets Table, all operations are scoped to
// the table's range so that rows above the table are not disturbed.
async function syncSheet(sheets, title, header, items, matchColumn, rowValues, matchValue, typedColumns = []) {
  const { sheetId, table } = await ensureSheetMeta(sheets, title);
  const tableStart = table?.startRowIndex ?? 0;  // 0-based row of the table header
  const headerRow = tableStart + 1;              // 1-based sheet row of the table header

  // Read only the table's range when a Table exists; otherwise read the whole sheet.
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: tabReadRange(title, table),
  });
  const existingValues = existing.data.values || [];

  // Trim: delete any empty trailing rows so the table tightly bounds its data.
  // values.get stops at the last non-empty row, so rows beyond existingValues are empty.
  if (table && tableStart + existingValues.length < table.endRowIndex) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [{
          deleteDimension: {
            range: {
              sheetId,
              dimension: 'ROWS',
              startIndex: tableStart + existingValues.length,
              endIndex: table.endRowIndex,
            },
          },
        }],
      },
    });
  }

  const plan = planSheetSync(existingValues, header, items, matchColumn, rowValues, matchValue);

  // For a table, insert new rows inside it before writing so the table expands
  // to include them rather than having data land outside the table boundary.
  // We insert before the last table row (or after the header if table has no data)
  // so the new rows are within the table; sorting corrects the order afterwards.
  let appendStartRow = headerRow + existingValues.length;
  if (plan.appendRows.length > 0 && table) {
    const insertAt = tableStart + Math.max(existingValues.length - 1, 1);
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [{
          insertDimension: {
            range: { sheetId, dimension: 'ROWS', startIndex: insertAt, endIndex: insertAt + plan.appendRows.length },
            inheritFromBefore: true,
          },
        }],
      },
    });
    appendStartRow = insertAt + 1;  // 1-based sheet row of first inserted row
  }

  await applySheetSync(sheets, title, plan, typedColumns, headerRow, appendStartRow);

  if (plan.appendRows.length > 0) {
    await sortSheet(
      sheets, SPREADSHEET_ID, sheetId,
      tableStart + 1,
      tableStart + existingValues.length + plan.appendRows.length,
      table?.endColumnIndex ?? plan.header.length,
    );
  }
}

// Copies Tools[Team Members] → Admin[Maintainer], matching rows by Tool ID.
async function syncTeamMembersToAdmin(sheets) {
  const [toolsMeta, adminMeta] = await Promise.all([
    getSheetMeta(sheets, 'Tools'),
    getSheetMeta(sheets, 'Admin'),
  ]);
  if (!toolsMeta) { console.warn('Tools sheet not found, skipping Team Members→Maintainer sync'); return; }
  if (!adminMeta) { console.warn('Admin sheet not found, skipping Team Members→Maintainer sync'); return; }

  const { table: toolsTable } = toolsMeta;
  const toolsValues = (await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: tabReadRange('Tools', toolsTable) })).data.values || [];
  if (toolsValues.length === 0) return;

  const toolsHeader = toolsValues[0];
  const toolIdCol = toolsHeader.indexOf('Tool ID');
  const teamMembersCol = toolsHeader.indexOf('Team Members');
  if (toolIdCol === -1 || teamMembersCol === -1) {
    console.warn('Tools sheet missing Tool ID or Team Members column, skipping sync');
    return;
  }

  const teamMembersMap = new Map();
  for (let i = 1; i < toolsValues.length; i++) {
    const id = toolsValues[i][toolIdCol];
    if (id) teamMembersMap.set(id, toolsValues[i][teamMembersCol] ?? '');
  }

  const { table: adminTable } = adminMeta;
  const adminValues = (await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: tabReadRange('Admin', adminTable) })).data.values || [];
  if (adminValues.length === 0) return;

  const adminHeader = adminValues[0];
  const adminToolIdCol = adminHeader.indexOf('Tool ID');
  const adminMaintainerCol = adminHeader.indexOf('Maintainer');
  if (adminToolIdCol === -1) { console.warn('Admin sheet missing Tool ID column, skipping sync'); return; }
  if (adminMaintainerCol === -1) { console.warn('Admin sheet missing Maintainer column, skipping sync'); return; }

  const adminHeaderRow = (adminTable?.startRowIndex ?? 0) + 1;

  const updates = [];
  for (let i = 1; i < adminValues.length; i++) {
    const toolId = adminValues[i][adminToolIdCol];
    if (!toolId) continue;
    const teamMembers = teamMembersMap.get(toolId);
    if (teamMembers === undefined) continue;
    if ((adminValues[i][adminMaintainerCol] ?? '') === teamMembers) continue;
    updates.push({
      range: `Admin!${columnLetter(adminMaintainerCol)}${i + adminHeaderRow}`,
      values: [[teamMembers]],
    });
  }

  if (updates.length === 0) { console.log('Admin: Maintainer already up to date'); return; }

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: { valueInputOption: 'RAW', data: updates },
  });
  console.log(`Admin: updated ${updates.length} Maintainer value(s)`);
}

// Columns written as USER_ENTERED so Sheets parses them into real booleans/dates.
const TOOLS_TYPED_COLUMNS = ['Published', 'Last updated', 'Date submitted'];
const MEMBERS_TYPED_COLUMNS = ['Last seen at', 'Joined at'];

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  const tools = toolsItems();
  const toolIds = tools.map((item) => item.toolId);

  // Guards against wiping every tracked row on a bad fetch (e.g. a renamed
  // "Tool ID" project field): only prune when we got at least one tool item.
  const pruneStale = toolIds.length > 0;
  if (!pruneStale) {
    console.warn('No tool items found in GitHub project — skipping stale-row pruning');
  }

  await syncSheet(sheets, 'Tools', TOOLS_HEADER, tools, 'Tool ID', toolValues, (item) => item.toolId, TOOLS_TYPED_COLUMNS);
  if (pruneStale) await pruneStaleRows(sheets, SPREADSHEET_ID, 'Tools', 'Tool ID', new Set(toolIds));

  await syncSheet(sheets, 'Members', MEMBERS_HEADER, await fetchMembers(), 'Email', memberValues, (member) => member.user?.email || '', MEMBERS_TYPED_COLUMNS);

  for (const title of TOOL_ID_REFERENCE_TABS) {
    await syncToolIdReferences(sheets, SPREADSHEET_ID, title, toolIds);
    if (pruneStale) await pruneStaleRows(sheets, SPREADSHEET_ID, title, 0, new Set(toolIds));
  }

  // The maintainer spreadsheet is a separate document with the same
  // column-A convention. Skipped (not failed) when its ID isn't configured,
  // so runs without the secret still sync everything else.
  const maintSheetId = process.env[MAINT_SHEET_ID_ENV];
  if (maintSheetId) {
    for (const title of MAINT_TOOL_ID_REFERENCE_TABS) {
      await syncToolIdReferences(sheets, maintSheetId, title, toolIds);
      if (pruneStale) await pruneStaleRows(sheets, maintSheetId, title, 0, new Set(toolIds));
      // Last, so every row exists before values are written beside it.
      await syncToolColumns(
        sheets,
        { spreadsheetId: SPREADSHEET_ID, title: MAINT_SOURCE_TAB },
        { spreadsheetId: maintSheetId, title },
        MAINT_SYNCED_COLUMNS,
        MAINT_TYPED_COLUMNS,
      );
    }
  } else {
    console.warn(`${MAINT_SHEET_ID_ENV} not set — skipping maintainer sheet tool ID sync`);
  }

  await syncTeamMembersToAdmin(sheets);
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { planSheetSync, toolsItems, toolValues, memberValues };
