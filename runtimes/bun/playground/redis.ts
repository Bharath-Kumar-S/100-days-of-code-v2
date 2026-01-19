// docker run -d \
//   --name redis \
//   -p 6379:6379 \
//   redis:7

import { redis } from "bun";

redis.connect();

// Set a value
await redis.set("greeting", "Hello, World!");

// Get a value
const greeting = await redis.get("greeting");
console.log(greeting);

// Optional: close connection
await redis.close();
