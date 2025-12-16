import { useEffect, useState } from "react";
import { useDebounce } from "../hook/useDebounce";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const CancelableDataFetch = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      setPosts([]);
      return;
    }

    const controller = new AbortController();

    const fetchQuery = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuery();

    return () => controller.abort();
  }, [debouncedQuery, query]);

  return (
    <>
      <h2>CancelableDataFetch</h2>
      <section>
        <input
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          aria-busy={loading}
          placeholder="Search posts"
        />
      </section>
      {error && <p role="alert">{error.message}</p>}
      {loading && <p>Loading!!!!</p>}
      {!loading && !error && posts.length === 0 && query && (
        <p>No results found</p>
      )}
      <section>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h4>
                {post.id} – {post.title}
              </h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
