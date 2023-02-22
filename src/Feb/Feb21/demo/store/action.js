export const login = (userName, userPassword) => {
  return {
    type: 'USER_LOGIN',
    payload: {
      Name: userName,
      Password: userPassword,
    },
  };
};
export const logout = (userName, userPassword) => {
  return {
    type: 'USER_LOGOUT',
    payload: {
      Name: userName,
      Password: userPassword,
    },
  };
};
