// Min-Tracking Stack Implementation

// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/min-tracking-stack

// Implement a stack that supports push, pop, top, and getMin operations in O(1) time, where getMin returns the minimum element.

/*
 * Complete the 'processCouponStackOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function processCouponStackOperations(operations: string[]): number[] {
  const stack = [],
    result = [];
  let min = Infinity;
  for (const operation of operations) {
    const [opt, value] = operation.split(" ");
    switch (opt) {
      case "push":
        stack.push(Number(value));
        min = Math.min(min, Number(value));
        break;
      case "getMin":
        result.push(min);
        break;
      case "pop":
        stack.pop();
        min = Math.min(...stack);
        break;
      case "top":
        result.push(stack[stack.length - 1]);
    }
  }
  return result;
}

// Use an auxiliary stack to track minimums in O(1) time.

function processCouponStackOperations1(operations: string[]): number[] {
  const stack: number[] = [];
  const minStack: number[] = [];
  const result: number[] = [];

  for (const operation of operations) {
    const [opt, value] = operation.split(" ");

    switch (opt) {
      case "push": {
        const num = Number(value);
        stack.push(num);

        if (minStack.length === 0 || num <= minStack[minStack.length - 1]) {
          minStack.push(num);
        }
        break;
      }

      case "pop": {
        const removed = stack.pop();
        if (removed === minStack[minStack.length - 1]) {
          minStack.pop();
        }
        break;
      }

      case "top":
        result.push(stack[stack.length - 1]);
        break;

      case "getMin":
        result.push(minStack[minStack.length - 1]);
        break;
    }
  }

  return result;
}
