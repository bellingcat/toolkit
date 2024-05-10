import fs from 'fs';
import pkg from './tools.mjs'
const {fetchSpaces, fetchTeams, writeSpaces, writeTeams} = pkg;

// script to get spaces from gitbook and save them to a json file
const spaces = await fetchSpaces();
writeSpaces(spaces);

const teams = await fetchTeams();
writeTeams(teams);
