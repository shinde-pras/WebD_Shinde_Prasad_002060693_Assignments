export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: {
    email: user.email,
    type: user.type,
    token: user.token,
  },
});
