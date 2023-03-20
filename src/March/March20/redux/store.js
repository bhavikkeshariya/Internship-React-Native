import {configureStore} from '@reduxjs/toolkit';
import userSlice from './toolkit';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
});
export default store;
