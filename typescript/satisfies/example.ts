type ApiConfig = Record<string, string>;

const endpoints: ApiConfig = {
  users: "/api/users",
  posts: "/api/posts",
};

endpoints.users;

const url = endpoints.userz; // does not even exist, ts is fine unless it is string

const endpoints1 = {
  users: "/api/users",
  posts: "/api/posts",
} satisfies ApiConfig;

endpoints1.users; // we get typings as well
