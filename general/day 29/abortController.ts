const abortController = new AbortController();
const signal = abortController.signal;

(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal,
    });
    abortController.abort();
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      console.error("Fetch request timed out");
    } else {
      console.error("Ftech request failed");
    }
  }
})();
