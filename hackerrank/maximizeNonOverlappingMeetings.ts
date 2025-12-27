// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/maximum-non-overlapping-intervals

// Maximum Number of Non-Overlapping Intervals

/*
 * Complete the 'maximizeNonOverlappingMeetings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY meetings as parameter.
 */

function maximizeNonOverlappingMeetings(meetings: number[][]): number {
  // Write your code here
  meetings.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastEnd = -Infinity;

  for (const [start, end] of meetings) {
    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }

  return count;
}
