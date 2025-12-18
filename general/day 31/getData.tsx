export const getData = async () => {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts");
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
