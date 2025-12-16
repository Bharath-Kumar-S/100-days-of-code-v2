import { useState } from "react";
import { useDebounce } from "../hook/useDebounce"; // your reusable debounce hook

// Component to highlight matched text
const HighlightedText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight) return <>{text}</>;

  const escaped = highlight.replace(/[a-z]/gi, "");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? <b key={i}>{part}</b> : <span key={i}>{part}</span>
      )}
    </>
  );
};

export const Filter = () => {
  const [data] = useState([
    "apple",
    "apricot",
    "pineapple",
    "banana",
    "mango",
    "grape",
  ]);
  const [query, setQuery] = useState("");

  // Debounce the search input
  const debouncedQuery = useDebounce(query, 300);

  // Filtered results based on debounced query
  const filtered = data.filter((item) =>
    item.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div>
      <h3>Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search input"
      />

      {filtered.length > 0 ? (
        <ul>
          {filtered.map((item) => (
            <li key={item}>
              <HighlightedText text={item} highlight={debouncedQuery} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
