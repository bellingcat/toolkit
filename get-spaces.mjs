import fs from 'fs';
import pkg from './tools.mjs'
const {getToolSpaces, getTeams} = pkg;

// script to get spaces from gitbook and save them to a json file
const spaces = await getToolSpaces();
console.log('writing', spaces.length, 'spaces to',  'gitbook/spaces.json');
fs.writeFileSync('spaces.json', JSON.stringify(spaces, null, 2));

const teams = await getTeams();
console.log('writing', teams.length, 'teams to',  'gitbook/teams.json');
fs.writeFileSync('teams.json', JSON.stringify(teams, null, 2));
