"use client";
/* eslint-disable react-hooks/refs */
import {
  useEffect,
  useRef,
  //  useState
} from "react";

export const Refs = () => {
  //   const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    // setCount(count + 1);
    countRef.current = countRef.current + 1;
    console.log("Ref Count:", countRef.current);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //    refs dont cause re-renders
  return (
    <div>
      <h2>Refs</h2>
      {/* <p>State Count: {count}</p> */}
      <p>Ref Count: {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>

      <div>
        <input ref={inputRef} type="text" placeholder="Focus on mount" />
      </div>
    </div>
  );
};
