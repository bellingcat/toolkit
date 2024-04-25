import fs from 'fs';
import pkg from './tools.mjs'
const {getToolSpaces, getTeams, writeSpaces, writeTeams} = pkg;

// script to get spaces from gitbook and save them to a json file
const spaces = await getToolSpaces();
writeSpaces(spaces);

const teams = await getTeams();
writeTeams(teams);
