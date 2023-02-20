const initialState = {
  count: 0,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_BURGER':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREASE_BURGER':
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
export default burgerReducer;
