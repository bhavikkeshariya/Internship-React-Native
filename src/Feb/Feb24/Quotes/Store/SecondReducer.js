const initialState = {
  quote: 'Generate a Anime Quote',
  character: 'Character',
  anime: 'Anime',
  isLoading: false,
  error: null,
};

const quoteReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_QUOTE_START':
      return Object.assign({}, state, {isLoading: true});
    case 'LOAD_QUOTE_SUCCESS':
      return Object.assign({}, state, {
        quote: action.payload,
        character: action.payload,
        anime: action.payload,
        isLoading: false,
      });

    case 'LOAD_QUOTE_FAILURE':
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });

    default:
      return state;
  }
};

export default quoteReducer2;
