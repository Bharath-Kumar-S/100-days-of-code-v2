type User = {
  name: string;
};

interface LoadingState {
  status: "loading";
}

interface SuccessState {
  status: "success";
  data: User;
}

interface Error {
  status: "error";
  error: string;
}

type ApiState = LoadingState | SuccessState | Error;

function renderState(state: ApiState) {
  switch (state.status) {
    case "loading":
      return state.status;
    case "success":
      return state.data;
    case "error":
      return state.error;
  }
}
