import { isRetryable, randomFailureApi } from "../../utils/mocks/apiHelper";
import { sleep } from "../../utils/time";

export const retry = async <T>(
  fn: () => Promise<T>,
  retries: number = 5,
  delay: number = 500
): Promise<T> => {
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt === retries && !isRetryable(error)) break;
      const backOff = delay * Math.pow(2, attempt - 1);
      console.log(
        `Attempt ${attempt}/${retries} failed. Retrying in ${backOff}ms`
      );
      await sleep(backOff);
    }
  }
  throw lastError;
};

(async () => {
  try {
    const response = await retry(randomFailureApi);
    console.log(response);
  } catch (error) {
    console.error(`All retries failed : ${(error as Error).message}`);
  }
})();
