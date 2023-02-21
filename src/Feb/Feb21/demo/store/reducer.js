const initialState = {
  Name: '',
  Password: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        Name: action?.payload.Name,
        Password: action?.payload.Password,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        Name: action?.payload.Name,
        Password: action?.payload.Password,
      };

    default:
      return state;
  }
};
export default Reducer;
