export const login = (userName, userPassword) => {
  console.log(userName, userPassword);
  return {
    type: 'USER_LOGIN',
    payload: {
      Name: userName,
      Password: userPassword,
    },
  };
};
console.log();
export const logout = (userName, userPassword) => {
  console.log(userName, userPassword);
  return {
    type: 'USER_LOGOUT',
    payload: {
      Name: userName,
      Password: userPassword,
    },
  };
};
