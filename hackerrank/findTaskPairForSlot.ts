// findTaskPairForSlot
// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/time-slot-task-pairing/problem

/*
 * Complete the 'findTaskPairForSlot' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY taskDurations
 *  2. INTEGER slotLength
 */

function findTaskPairForSlot(
  taskDurations: number[],
  slotLength: number
): number[] {
  const taskMap = new Map<number, number>(); // duration -> index

  for (let i = 0; i < taskDurations.length; i++) {
    const current = taskDurations[i];
    const complement = slotLength - current;

    // Check if complement exists
    if (taskMap.has(complement)) {
      return [taskMap.get(complement)!, i]; // pair found
    }

    // Store current task in map
    taskMap.set(current, i);
  }

  // No valid pair
  return [-1, -1];
}
