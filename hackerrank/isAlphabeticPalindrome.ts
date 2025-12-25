// Check Palindrome by Filtering Non-Letters

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-palindrome-filter-non-letters/problem

/*
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.
 */

function isAlphabeticPalindrome(code: string): boolean {
  const s = code.toLowerCase().replace(/[^a-z]/g, "");

  return s === s.split("").reverse().join("");
}
