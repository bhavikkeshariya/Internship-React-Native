import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './dataReducer';

const store = configureStore({
  reducer: dataReducer,
});
console.log(store.getState());
export default store;
