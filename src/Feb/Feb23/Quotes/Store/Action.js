import axios from 'react-native-axios';

export const loadQuote = () => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_QUOTE_START'});
    axios
      .get('https://animechan.vercel.app/api/random')
      .then(function (response) {
        console.log(response);
        dispatch({type: 'LOAD_QUOTE_SUCCESS', payload: response.data[0].quote});
      })
      .catch(function (error) {
        dispatch({type: 'LOAD_QUOTE_FAILURE', payload: error});
      });
  };
};
