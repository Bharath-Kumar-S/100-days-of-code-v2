// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average

/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes: number[], ct = 0): number {
  let sum = responseTimes[0] ?? 0;

  for (let i = 1; i < responseTimes.length; i++) {
    let avg = Math.round(sum / i);

    if (responseTimes[i] > avg) {
      ct += 1;
    }

    sum += responseTimes[i];
  }
  return ct;
}
