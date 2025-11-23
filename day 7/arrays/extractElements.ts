function extractElements<T>(dataArray: T[], indices: number[]): T[] {
  // TODO: Return a subset of the array based on the provided indices
  return indices.map((i) => dataArray[i]).filter((el) => el !== undefined);
}

// Define an array with mixed data types
const mixedArray = ["TypeScript", 6, false, ["Nested", "Array"], 99];

// Extract elements at specified indices
const subArray = extractElements(mixedArray, [1, 3, 4]);

// Print the resulting subset array
console.log(subArray); // Expected output: [6, ['Nested', 'Array'], 99]
