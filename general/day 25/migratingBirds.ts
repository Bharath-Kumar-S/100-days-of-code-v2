// https://www.hackerrank.com/challenges/migratory-birds/problem

import assert from "assert";
function migratoryBirds(arr: number[]): number {
  const lookup = new Map();
  for (const a of arr) {
    lookup.set(a, (lookup.get(a) || 0) + 1);
  }
  const result = [...lookup.entries()].sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  })[0][0];
  return result;
}
