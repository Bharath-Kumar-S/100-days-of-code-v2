"use client";

import { Activity, Suspense, useState } from "react";
import { Counter } from "./Counter";
import { AsyncFellow } from "./AsyncFellow";

export default function Home() {
  const [isVisisble, setIsVisible] = useState(false);
  const [isAsyncVisible, setIsAsyncVisible] = useState(false);

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

      <div className="mt-16">
        <button onClick={() => setIsAsyncVisible(!isAsyncVisible)}>
          {isAsyncVisible ? "Hide" : "Show"} Async Fellow
        </button>
        <div className="mt-8">
          {/* withouyt activity no pre loading  */}
          {/* <Suspense fallback={<div>Loading async fellow...</div>}>
            {isAsyncVisible && <AsyncFellow />}
          </Suspense> */}

          <Suspense fallback={<div>Loading async fellow...</div>}>
            <Activity mode={isAsyncVisible ? "visible" : "hidden"}>
              <AsyncFellow />
            </Activity>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
