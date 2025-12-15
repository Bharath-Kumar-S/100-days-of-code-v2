// fake api that randomly fails
export function unreliableApi(): Promise<number> {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve(10);
      } else {
        reject(new Error("API call failed"));
      }
    }, 100);
  });
}

// retry logic
export async function retry<T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      console.log(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw new Error("Unreachable code");
}

// usage
(async () => {
  try {
    const result = await retry(unreliableApi, 3, 500);
    console.log("API call succeeded with result:", result);
  } catch (error) {
    console.error("All retries failed:", (error as Error).message);
  }
})();
