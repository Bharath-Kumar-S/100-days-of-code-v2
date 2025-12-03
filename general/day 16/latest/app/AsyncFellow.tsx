import { use } from "react";

const dataPromise: Promise<string> = new Promise((r) =>
  setTimeout(() => r("Data fetched"), 2000)
);

export const AsyncFellow = () => {
  const data = use(dataPromise);
  return <div>AsyncFellow: {data}</div>;
};
