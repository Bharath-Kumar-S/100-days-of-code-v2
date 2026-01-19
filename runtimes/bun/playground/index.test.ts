import { expect, test } from "bun:test";

test("sample test", () => {
  expect(1 + 1).toBe(2);
});

test("async sample test", async () => {
  const data = await Promise.resolve(42);
  expect(data).toBe(42);
});

test("string manipulation", () => {
  const str = "Hello, Bun!";
  expect(str.toUpperCase()).toBe("HELLO, BUN!");
});

test("array operations", () => {
  const arr = [1, 2, 3];
  arr.push(4);
  expect(arr).toHaveLength(4);
  expect(arr).toContain(2);
});

test("object property check", () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(obj).toHaveProperty("b", 2);
});

test("promise rejection", async () => {
  const rejectPromise = () => Promise.reject(new Error("Test error"));
  await expect(rejectPromise()).rejects.toThrow("Test error");
});
