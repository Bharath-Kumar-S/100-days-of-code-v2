// Count Number Pairs
// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-number-pairs/problem

/*
 * Complete the 'countAffordablePairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER budget
 */

function countAffordablePairs(prices: number[], budget: number): number {
  let count = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] <= budget) {
        count += 1;
      }
    }
  }
  return count;
}
