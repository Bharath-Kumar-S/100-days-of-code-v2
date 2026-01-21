import { useState } from "react";

export function ControlledInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value;
    setValue(nextValue);

    if (nextValue.length < 3) {
      setError("Must be at least 3 characters");
    } else {
      setError(null);
    }
  }

  function handleReset() {
    setValue("");
    setError(null);
  }

  return (
    <section>
      <h2>Controlled Input</h2>

      <input
        value={value}
        onChange={handleChange}
        placeholder="Type at least 3 chars"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Value: {value}</p>

      <button onClick={handleReset}>Reset</button>
    </section>
  );
}
