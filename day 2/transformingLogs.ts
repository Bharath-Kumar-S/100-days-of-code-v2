// In this task, you'll analyze log data from a library's digital system to determine the book(s) with the longest borrowed duration using TypeScript.

// Each log entry follows this format: <book_id> borrow <time>, <book_id> return <time>, where time is in HH:MM format. The logs are separated by ", ".
// Your task is to create a TypeScript function named solution that processes these logs and outputs an array of strings representing the book ID and its total borrowed duration.

// Key points to consider:

// Calculate the total borrowed duration for each book.
// If multiple books have the same longest duration, list them in ascending order of their IDs.
// For example, given logs like: "1 borrow 09:00, 2 borrow 10:00, 1 return 12:00, 3 borrow 13:00, 2 return 15:00, 3 return 16:00", the function should return: ["2 05:00"].

import { toHHMM, toMinutes } from "../utils/time";

function transformingLogs(logs: string): string[] {
  const entries = logs.split(", ").map((e) => e.trim());

  const borrowTimes: Record<string, number> = {};
  const totalTimes: Record<string, number> = {};

  for (const entry of entries) {
    const [id = "", action, time = ""] = entry.split(" ");

    if (action === "borrow") {
      borrowTimes[id] = toMinutes(time);
    } else if (action === "return") {
      const borrowedAt = borrowTimes[id];
      if (borrowedAt !== undefined) {
        const duration = toMinutes(time) - borrowedAt;
        totalTimes[id] = (totalTimes[id] || 0) + duration;
        delete borrowTimes[id];
      }
    }
  }
  const maxDuration = Math.max(...Object.values(totalTimes));

  return Object.entries(totalTimes)
    .filter(([_, duration]) => duration === maxDuration)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([id, duration]) => `${id} ${toHHMM(duration)}`);
}

// Example usage:
console.log(
  transformingLogs(
    "1 borrow 09:00, 2 borrow 10:00, 1 return 12:00, 3 borrow 13:00, 2 return 15:00, 3 return 16:00"
  )
);
// Expected output: ["2 05:00"]
