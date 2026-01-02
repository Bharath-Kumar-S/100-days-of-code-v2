// Check Valid Anagram
// Given two strings s and t, return 1 if t is an anagram of s, otherwise return 0.

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-valid-anagram

/*
 * Complete the 'isAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 */

function isAnagram1(s: string, t: string): number {
  return s.split("").sort().join("") === t.split("").sort().join("") ? 1 : 0;
}

function isAnagram2(s: string, t: string): number {
  if (s.length !== t.length) return 0;

  const countMap = new Map<string, number>();

  for (const c of s) countMap.set(c, (countMap.get(c) || 0) + 1);

  for (const c of t) {
    if (!countMap.has(c)) return 0;

    countMap.set(c, countMap.get(c)! - 1);

    if (countMap.get(c) === 0) {
      countMap.delete(c);
    }
  }

  return 1;
}

function isAnagram3(s: string, t: string): number {
  if (s.length !== t.length) return 0;

  const freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
    freq[t.charCodeAt(i) - 97]--;
  }

  return freq.every((e) => e === 0) ? 1 : 0;
}
