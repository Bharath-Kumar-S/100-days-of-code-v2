// const request = {
//   method: "GET",
//   url: "api/users",
// } as const;

// function makeRequest(url: string, method: "GET" | "POST") {
//   return "";
// }

// makeRequest(request.url, request.method);

type Request = {
  method: "GET" | "POST";
  url: string;
};

const request: Request = {
  method: "GET",
  url: "api/users",
};

function makeRequest(url: string, method: "GET" | "POST") {
  return "works";
}

makeRequest(request.url, request.method);
