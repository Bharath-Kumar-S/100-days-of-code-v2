// Validate Properly Nested Brackets

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/validate-properly-nested-brackets/problem

/*
 * Complete the 'areBracketsProperlyMatched' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code_snippet as parameter.
 */

function areBracketsProperlyMatched(code_snippet: string): boolean {
  // Write your code here
  const brackets = code_snippet.replace(/[^{}\[\]\(\)]/g, "");
  const stack = [];
  const ref: Record<string, string> = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (const bracket of brackets) {
    if (["{", "[", "("].includes(bracket)) {
      stack.push(bracket);
    } else {
      let prev = stack.pop()!;
      if (ref[bracket] !== prev) return false;
    }
  }
  return stack.length === 0;
}
