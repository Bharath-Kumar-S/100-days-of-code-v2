"use client";

import { Activity, useState } from "react";
import { Counter } from "./Counter";

export default function Home() {
  const [isVisisble, setIsVisible] = useState(true);

  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <button onClick={() => setIsVisible(!isVisisble)}>
        {isVisisble ? "Hide" : "Show"} Counter
      </button>
      <div className="flex flex-row gap-8 mt-8">
        {/* with activity */}
        <Activity mode={isVisisble ? "visible" : "hidden"}>
          <div className="flex-1">
            <h2>With Activity Component</h2>
            <Counter />
          </div>
        </Activity>
        {/* without activity */}
        {isVisisble && (
          <div className="flex-1">
            <h2>Without Activity Component</h2>
            <Counter />
          </div>
        )}
      </div>
    </main>
  );
}
