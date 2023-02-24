import axios from 'axios';

export const loadQuote = () => {
  var data;
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_QUOTE_START'});
    axios
      .get('https://kyoko.rei.my.id/api/quotes.php')
      .then(function (response) {
        console.log(response);
        data = response.data.apiResult;
        console.log(data);
        dispatch({
          type: 'LOAD_QUOTE_SUCCESS',
          payload: [
            response.data.apiResult[0].english,
            response.data.apiResult[0].character,
            response.data.apiResult[0].anime,
          ],
        });
      })
      .catch(function (error) {
        dispatch({type: 'LOAD_QUOTE_FAILURE', payload: error});
      });
  };
};

export const loadQ = () => {
  var data;
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_QUOTE_START'});
    axios
      .get('https://kyoko.rei.my.id/api/quotes.php')
      .then(function (response) {
        console.log(response);
        data = response.data.apiResult;
        console.log(data);
        dispatch({
          type: 'LOAD_QUOTE_SUCCESS',
          payload: [
            response.data.apiResult[0].english,
            response.data.apiResult[0].character,
            response.data.apiResult[0].anime,
          ],
        });
      })
      .catch(function (error) {
        dispatch({type: 'LOAD_QUOTE_FAILURE', payload: error});
      });
  };
};
