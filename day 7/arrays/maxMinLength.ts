function findMaxMinLengths(dataArray: string[]): { max: number; min: number } {
  // TODO: Return the lengths of the longest and shortest strings in the array
  const lenArr = dataArray.map((a) => a.length);
  return {
    max: Math.max(...lenArr),
    min: Math.min(...lenArr),
  };
}

// Define an array with various string lengths
const dataArray = ["Hi", "Hello", "Bonjour", "Cześć"];

// TODO: Use the function to get the longest and shortest string lengths and print them
// Expected output:
// Max string length: 7
// Min string length: 2
const result = findMaxMinLengths(dataArray);

console.log(result.max);
console.log(result.min);
