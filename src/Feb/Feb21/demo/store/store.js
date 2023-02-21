import {configureStore} from '@reduxjs/toolkit';

import Reducer from './reducer';

const store = configureStore({
  reducer: {
    Data: Reducer,
  },
});

export default store;
