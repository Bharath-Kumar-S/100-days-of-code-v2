function combineArrays(
  arrayA: string[],
  arrayB: string[],
  multiplier: number
): string[] {
  // TODO: Concatenate arrayA and arrayB, then repeat the result using the multiplier
  return Array(multiplier).fill(arrayA.concat(arrayB)).flat();
}

// Define two arrays to combine
const morningFruits: string[] = ["banana", "orange"];
const eveningFruits: string[] = ["apple", "cherry"];

// TODO: Combine and repeat the defined arrays 2 times by using the function, then print the result
// Expected output: ['banana', 'orange', 'apple', 'cherry', 'banana', 'orange', 'apple', 'cherry']

console.log(combineArrays(morningFruits, eveningFruits, 2));
