// 1636. Sort Array by Increasing Frequency

function frequencySort(nums: number[]): number[] {
  const frequencyMap: Record<number, number> = {};

  // Count the frequency of each number
  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Sort the array based on frequency and value
  return nums.sort((a, b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];

    if (freqA === freqB) {
      return b - a; // Higher value first if frequencies are the same
    }
    return freqA - freqB; // Lower frequency first
  });
}

// Example usage:
const nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums)); // Output: [3,1,1,2,2,2]

// Another example:
const nums2 = [2, 3, 1, 3, 2];
console.log(frequencySort(nums2)); // Output: [1,3,3,2,2]

// Yet another example:
const nums3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
console.log(frequencySort(nums3)); // Output: [5,-1,4,4,-6,-6,1,1,1]
