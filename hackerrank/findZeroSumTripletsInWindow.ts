/*
 * Complete the 'findZeroSumTripletsInWindow' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY readings
 *  2. INTEGER windowSize
 */

function findZeroSumTripletsInWindow(
  readings: number[],
  windowSize: number
): number[][] {
  const result: number[][] = [];

  for (let i = 0; i <= readings.length - windowSize; i++) {
    const window = readings.slice(i, i + windowSize);
    const sum = window.reduce((a, c) => a + c, 0);

    if (sum === 0) {
      result.push(window);
    }
  }

  return result;
}

console.log(findZeroSumTripletsInWindow([1, -2, 1, 0, 5, -5], 3));
