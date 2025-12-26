// Target Index Search

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/lookup-with-binary-search

/*
 * Complete the 'binarySearch' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function binarySearch(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
