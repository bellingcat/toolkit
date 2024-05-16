async function getMembers() {
  const response = await fetch('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/members', {
    method: 'GET',
    headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`
    },
  });
  const result = await response.json();
  return result.items;
}

async function printIdleMembers() {
  const members = await getMembers();
  const utc_one_month_ago = Date.now() - 1000 * 60 * 60 * 24 * 30;
  const idle = members.filter(member => member.lastSeenAt < utc_one_month_ago);
  console.log('Members who have been idle since', new Date(utc_one_month_ago));
  if (idle.length > 0) {
    console.log(idle.map(member => member.user.email));
  } else {
    console.log('None found.');
  }
}

printIdleMembers();
