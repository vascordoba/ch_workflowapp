import { AUTHENTICATE, SIGN_OUT } from "../actions/login-actions";

const initialState = {
  authenticated: false
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, authenticated: true };
    case SIGN_OUT:
      return { ...state, authenticated: false };

    default:
      return state;
  }
};

export default LoginReducer;
