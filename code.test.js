const fs = require('fs');
const assert = require('assert');


eval(fs.readFileSync('code.js').toString());


const graph1 = [
  [1, 2],
  [0, 2],
  [0, 1]
];
const expected1 = true;
assert(hasCycle(graph1) === expected1, 'Test 1 Failed');


const graph2 = [
  [1],
  [0, 2],
  [1]
];
const expected2 = false;
assert(hasCycle(graph2) === expected2, 'Test 2 Failed');


const graph3 = [
  []
];
const expected3 = false;
assert(hasCycle(graph3) === expected3, 'Test 3 Failed');


const graph4 = [
  [0]
];
const expected4 = true;
assert(hasCycle(graph4) === expected4, 'Test 4 Failed');


const graph5 = [
  [1],
  [2],
  [0],
  [4],
  [5],
  [4]
];
const expected5 = true;
assert(hasCycle(graph5) === expected5, 'Test 5 Failed');


const graph6 = [
  [1],
  [0],
  [3],
  [2]
];
const expected6 = false;
assert(hasCycle(graph6) === expected6, 'Test 6 Failed');


const graph7 = [
  [1],
  [2],
  [3],
  [4],
  [0]
];
const expected7 = true;
assert(hasCycle(graph7) === expected7, 'Test 7 Failed');


const graph8 = [];
const expected8 = false;
assert(hasCycle(graph8) === expected8, 'Test 8 Failed');