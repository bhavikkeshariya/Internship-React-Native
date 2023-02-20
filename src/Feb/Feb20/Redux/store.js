import {configureStore} from '@reduxjs/toolkit';

import burgerReducer from './Burger/burgerReducer';

const store = configureStore({
  reducer: {count: burgerReducer},
});

export default store;
