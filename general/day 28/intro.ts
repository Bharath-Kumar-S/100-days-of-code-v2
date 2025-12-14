const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return reject(new Error("Something went wrong!"));
    }
    resolve(10);
  }, 1000);
});

// const promise = Promise.resolve<number>(42);
// console.log(promise); // Promise { 42 }

// console.log(promise); // Promise { <pending> }

// setTimeout(() => {
//   console.log(promise); // Promise { 'Hello, World!' }
// }, 1000);

promise
  .then((value) => value * 2)
  .then((value) => value + 5)
  .then(console.log)
  .catch((error) => {
    console.error(error.message);
    return 0;
  })
  .then(console.log)
  .finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected).");
  });
