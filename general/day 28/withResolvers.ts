const { promise, resolve, reject } = Promise.withResolvers<number>();
console.log("Initial promise state:", promise); // Promise { <pending> }

// either resolve or reject the promise after some operation
resolve(25);
// reject(new Error("An error occurred"));

console.log("Promise state after resolve call:", promise); // Promise { 25 }
