const promise =
  Math.random() > 0.2
    ? Promise.resolve<number>(42)
    : Promise.reject(new Error("Random failure"));

(async () => {
  try {
    const value = await promise;
    console.log("Resolved value:", value);
  } catch (error) {
    console.error("Error occurred:", (error as Error).message);
  }
})();
