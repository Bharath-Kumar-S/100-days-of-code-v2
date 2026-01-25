"use client";

import { use } from "react";

function DisplayName({ namePromise }: { namePromise: Promise<string> }) {
  const name = use(namePromise);
  return <p>{name}</p>;
}

export function Use() {
  const fetchName = () =>
    new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("React Developer");
      }, 2000);
    });

  return (
    <section>
      <h2>use() Hook Example</h2>
      <DisplayName namePromise={fetchName()} />
    </section>
  );
}
