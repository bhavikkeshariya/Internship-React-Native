const initialState = {
  cart: [],
  total: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== action.payload),
      };
    default:
      break;
  }
};

export default Reducer;
