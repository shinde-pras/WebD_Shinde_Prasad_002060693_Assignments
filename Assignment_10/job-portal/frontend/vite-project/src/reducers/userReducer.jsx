import { LOGIN_SUCCESS } from "../constants/userConstants";

const initialState = {
  email: null,
  type: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.payload.email,
        type: action.payload.type,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default userReducer;