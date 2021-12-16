export const AUTHENTICATE = "AUTHENTICATE";
export const SIGN_OUT = "SIGN_OUT";

export const login = () => ({
  type: AUTHENTICATE,
  authenticated: true,
});

export const logout = () => ({
  type: SIGN_OUT,
  authenticated: false,
});
