// Lexicographical Letter Combinations of Phone Digits

/*
 * Complete the 'minTasksToCancelForNoConflict' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING digits as parameter.
 */

function minTasksToCancelForNoConflict(digits: string): string[] {
  if (!digits) return [];

  const phoneMap: Record<string, string> = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const result: string[] = [];

  function dfs(index: number, path: string): void {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    for (const ch of phoneMap[digits[index]]) {
      dfs(index + 1, path + ch);
    }
  }

  dfs(0, "");
  return result;
}
