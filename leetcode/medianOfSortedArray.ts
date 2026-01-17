// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const median = (nums1: number[], nums2: number[]): number => {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const isOdd = merged.length % 2 !== 0;
  const mid = Math.floor(merged.length / 2);

  if (isOdd) return merged[mid];
  else return (merged[mid] + merged[mid - 1]) / 2;
};

console.log(median([1, 3], [2]));
console.log(median([1, 3], [2, 4]));
