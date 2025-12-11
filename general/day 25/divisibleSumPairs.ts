// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
import assert from "assert";

function divisibleSumPairs(
  n: number,
  k: number,
  ar: number[],
  result = 0
): number {
  ar.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) result += 1;
    }
  }
  return result;
}

assert.equal(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]), 5);
assert.equal(divisibleSumPairs(5, 2, [1, 2, 3, 4, 5]), 4);
