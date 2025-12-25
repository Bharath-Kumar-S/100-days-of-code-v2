// Find the Smallest Missing Positive Integer

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-smallest-missing-positive-integer/

/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers: number[]): number {
  let refArray = new Array(orderNumbers.length + 1).fill(false);

  for (const num of orderNumbers) {
    if (num > 0 && num <= orderNumbers.length) refArray[num] = true;
  }

  for (let i = 1; i <= orderNumbers.length; i++) {
    if (!refArray[i]) return i;
  }

  return orderNumbers.length + 1;
}
