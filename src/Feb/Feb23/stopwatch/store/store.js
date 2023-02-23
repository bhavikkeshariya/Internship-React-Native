import {configureStore} from '@reduxjs/toolkit';

import LesGo from './reducer';

const store = configureStore({
  reducer: {
    Data: LesGo,
  },
});

export default store;
