const randomFailureApi = (): Promise<string> => {
  return new Promise((resolve, reject) =>
    Math.random() < 0.1 ? resolve("success") : reject(new Error("api failure"))
  );
};

const isRetryable = (err: unknown): boolean =>
  err instanceof Error && err.message === "validation error";

export { randomFailureApi, isRetryable };
