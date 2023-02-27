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
    case 'EDIT':
      console.log(action.payload);
      return {
        ...state,
        data: state.data[action.payload],
      };
    case 'UPDATE':
      console.log(action.payload.Email + '00000000000000');
      return {
        ...state,
        data: state.data.map(),
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
