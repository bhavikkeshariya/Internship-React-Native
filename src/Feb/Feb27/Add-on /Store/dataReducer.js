const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(action.payload);

      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case 'UPDATE':
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };

    case 'DELETE':
      console.log(action.payload);
      return {
        ...state,
        data: state.data.filter((item, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default dataReducer;
