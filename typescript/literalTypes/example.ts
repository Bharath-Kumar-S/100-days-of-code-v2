type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiVersion = "v1" | "v2";
type Resource = "users" | "posts" | "comments";

type ApiEndpoint = `/api/${ApiVersion}/${Resource}`;

function fetchApi(endpoint: ApiEndpoint) {
  return "";
}

fetchApi("/api/v1/comments");
fetchApi("/api/v1/users");
