import { test } from 'node:test';
import assert from 'node:assert/strict';
import { columnLetter, tabReadRange } from './sheets-tab.mjs';

test('columnLetter: first column is A', () => {
  assert.equal(columnLetter(0), 'A');
});

test('columnLetter: last single-letter column is Z', () => {
  assert.equal(columnLetter(25), 'Z');
});

test('columnLetter: wraps to two letters after Z', () => {
  assert.equal(columnLetter(26), 'AA');
  assert.equal(columnLetter(27), 'AB');
});

test('columnLetter: carries across the two-letter boundary', () => {
  assert.equal(columnLetter(51), 'AZ');
  assert.equal(columnLetter(52), 'BA');
});

test('columnLetter: wraps to three letters after ZZ', () => {
  assert.equal(columnLetter(701), 'ZZ');
  assert.equal(columnLetter(702), 'AAA');
});

test('tabReadRange: without a table reads the whole tab', () => {
  assert.equal(tabReadRange('Tools', null), 'Tools');
});

test('tabReadRange: scopes to a table that starts at the top-left', () => {
  const table = { startRowIndex: 0, endRowIndex: 10, startColumnIndex: 0, endColumnIndex: 14 };
  assert.equal(tabReadRange('Tools', table), 'Tools!A1:N10');
});

test('tabReadRange: scopes to a table offset below and right of the origin', () => {
  const table = { startRowIndex: 2, endRowIndex: 40, startColumnIndex: 1, endColumnIndex: 4 };
  assert.equal(tabReadRange('Admin', table), 'Admin!B3:D40');
});
