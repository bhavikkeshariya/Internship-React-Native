const initialState = {
  quote: 'Generate a Anime Quote',
  character: 'Character',
  anime: 'Anime',
  isLoading: false,
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_QUOTE_START':
      return Object.assign({}, state, {isLoading: true});
    case 'LOAD_QUOTE_SUCCESS':
      return Object.assign({}, state, {
        quote: action.payload[0],
        character: action.payload[1],
        anime: action.payload[2],
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

export default quoteReducer;
