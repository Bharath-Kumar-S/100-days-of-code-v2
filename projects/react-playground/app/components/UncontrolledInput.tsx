"use client";

import { useRef, useState } from "react";

export function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    const value = inputRef.current?.value ?? "";

    if (value.length < 3) {
      setError("Must be at least 3 characters");
      return;
    }

    setError(null);
    setSubmittedValue(value);
  }

  function handleReset() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSubmittedValue(null);
    setError(null);
  }

  return (
    <section>
      <h2>Uncontrolled Input</h2>

      <input ref={inputRef} placeholder="Type at least 3 chars" />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Submitted value: {submittedValue}</p>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}
