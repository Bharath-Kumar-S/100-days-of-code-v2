const routes = {
  home: "/",
  about: "/about",
  users: "/users",
} as const;

type Route = (typeof routes)[keyof typeof routes];
