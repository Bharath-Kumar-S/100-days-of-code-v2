import { useEffect, useRef, useState } from "react";

export const useDebounce = <T,>(
  value: T,
  delay = 300,
  shouldDebounce = true
) => {
  const [debouncedValue, setDebounceValue] = useState<T>(value);
  const prevValue = useRef<T>(value);

  useEffect(() => {
    if (!shouldDebounce && prevValue.current !== value) {
      prevValue.current = value;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDebounceValue(value);
      return;
    }

    const timer = setTimeout(() => {
      prevValue.current = value;
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, shouldDebounce]);

  return debouncedValue;
};
