const initState = {
  username: "",
};

type Action = {
  type: string;
  payload: string;
};
export const User = (state = initState, action: Action) => {
  switch (action.type) {
    case "ADD_LOGIN":
      return {
        ...state,
        username: action.payload,
      };
    case "LOGOUT":
      return initState;
    default:
      return initState;
  }
};
