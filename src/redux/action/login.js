export const login = (username) => ({
  type: "ADD_LOGIN",
  payload: username,
});
export const logout = (username) => ({
  type: "LOGOUT",
  payload: username,
});
