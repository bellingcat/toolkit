import fs from 'fs';
import pkg from './tools.mjs'
const {fetchSpaces, writeSpaces} = pkg;

// script to get spaces from gitbook and save them to a json file
const spaces = await fetchSpaces();
writeSpaces(spaces);
