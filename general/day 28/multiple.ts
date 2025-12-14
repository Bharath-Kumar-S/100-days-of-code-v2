const sync = Promise.resolve<number>(42);

const async = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
});

const asyncRandom = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand < 0.5) {
      return reject(new Error("Random value is less than 0.5"));
    }
    resolve(rand);
  }, 1000);
});

(async () => {
  const [syncValue, asyncValue] = await Promise.all([sync, async]); // if one promise rejects, the whole Promise.all rejects
  console.log("Promise.all results:");
  console.log("Synchronous value:", syncValue);
  console.log("Asynchronous value:", asyncValue);

  const [asyncRandomValue, asyncRandomValue2] = await Promise.allSettled([
    sync,
    asyncRandom,
  ]); // handles each promise result individually
  console.log("Promise.allSettled results:");
  console.log(asyncRandomValue);
  console.log(asyncRandomValue2);

  // Promise.race
  try {
    const raceResult = await Promise.race([async, asyncRandom]); // resolves or rejects as soon as one promise settles
    console.log("Promise.race result:", raceResult);
  } catch (error) {
    console.error("Promise.race error:", (error as Error).message);
  }

  // Promise.any
  try {
    const anyResult = await Promise.any([asyncRandom, async]); // resolves as soon as one promise fulfills
    console.log("Promise.any result:", anyResult);
  } catch (error) {
    console.error("Promise.any error:", (error as AggregateError).message);
  }
})();
