// Check for Non-Identical String Rotation

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-non-identical-string-rotation

/*
 * Complete the 'isNonTrivialRotation' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function isNonTrivialRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length || s1 === s2) return false;
  return (s1 + s1).includes(s2);
}
