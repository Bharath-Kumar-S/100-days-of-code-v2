const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => {
      return new Response("Hello from Bun Playground!", {
        headers: { "Content-Type": "text/plain" },
      });
    },
  },
});

console.log(`Server running at http://localhost:${server.url}`);
