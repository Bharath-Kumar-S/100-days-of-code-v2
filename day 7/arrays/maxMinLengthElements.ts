function findMaxMinLengths(dataArray: string[]): {
  max: (string | number)[];
  min: (string | number)[];
} {
  // TODO: Return the lengths of the longest and shortest strings in the array
  const lenArr = dataArray
    .map((a) => [a.length, a])
    .map((b) => b as [number, string]);

  return {
    max: lenArr.reduce((a, b) => (b[0] > a[0] ? b : a)),
    min: lenArr.reduce((a, b) => (b[0] < a[0] ? b : a)),
  };
}

// Define an array with various string lengths
const dataArray = ["Hi", "Hello", "Bonjour", "Cześć"];

// TODO: Use the function to get the longest and shortest string lengths and print them
// Expected output:
// Max string length: 7
// Min string length: 2
const result = findMaxMinLengths(dataArray);
const [maxLength, maxElement] = result.max;
const [minLength, minElement] = result.min;
console.log(maxElement, maxLength);
console.log(minElement, minLength);
