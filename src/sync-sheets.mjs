import { google } from 'googleapis';
import projectFields from './ghproject-fields.mjs';
const { getProjectItems } = projectFields;
import pkg from './tools.mjs';
const { fetchMembers } = pkg;

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const TOOLS_HEADER = ['Title', 'Published', 'Last updated', 'Collection', 'Tool Space', 'Latest change request', 'Status', 'Date submitted', 'CR Author', 'CR Reviewers', 'Tool ID', 'Space ID'];
const MEMBERS_HEADER = ['Email', 'Role', 'Last seen at', 'Joined at'];

// Order must match TOOLS_HEADER. Synchronous: getProjectItems() shells out to `gh` synchronously.
function toolsRows() {
  return getProjectItems().map((item) => [
    item.title || '',
    item.published || '',
    item.updatedAt || '',
    item.collection || '',
    item.spaceUrl || '',
    item.url || '',
    item.status || '',
    item.submittedAt || '',
    item.changeRequestAuthor || '',
    item.reviewers || '',
    item.toolId || '',
    item.spaceId || '',
  ]);
}

// Order must match MEMBERS_HEADER.
async function membersRows() {
  const members = await fetchMembers();
  return members.map((member) => [
    member.user?.email || '',
    member.role || '',
    member.lastSeenAt || '',
    member.joinedAt || '',
  ]);
}

async function ensureSheetExists(sheets, title) {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const exists = spreadsheet.data.sheets.some((sheet) => sheet.properties.title === title);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: { requests: [{ addSheet: { properties: { title } } }] },
    });
    console.log(`Created sheet tab "${title}"`);
  }
}

async function writeSheet(sheets, title, header, rows) {
  await ensureSheetExists(sheets, title);

  await sheets.spreadsheets.values.clear({
    spreadsheetId: SPREADSHEET_ID,
    range: title,
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${title}!A1`,
    valueInputOption: 'RAW',
    requestBody: { values: [header, ...rows] },
  });

  console.log(`Wrote ${rows.length} rows to "${title}"`);
}

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  await writeSheet(sheets, 'Tools', TOOLS_HEADER, toolsRows());
  await writeSheet(sheets, 'Members', MEMBERS_HEADER, await membersRows());
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { toolsRows, membersRows };
