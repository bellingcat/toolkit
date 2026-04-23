import { ORG_ID } from './config.mjs';
import pkg2 from './tools.mjs';
const { fetchMembers } = pkg2;

// Script to find members who have been idle for a while
// Requres GITBOOK_API_TOKEN env var

async function printIdleMembers() {
  const members = await fetchMembers();
  console.log(members.length, 'members found.');
  const utc_one_month_ago = Date.now() - 1000 * 60 * 60 * 24 * 30;
  const idle = members.filter(member => new Date(member.lastSeenAt).getTime() < utc_one_month_ago);
  console.log(idle.length, 'Members who have been idle since', new Date(utc_one_month_ago));
  if (idle.length > 0) {
    console.log(idle.map(member => member.user.email));
  } else {
    console.log('None found.');
  }
}

printIdleMembers();
