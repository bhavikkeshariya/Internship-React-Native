import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import quoteReducer from './Reducer';
import quoteReducer2 from './SecondReducer';

const rootReducer = combineReducers({
  one: quoteReducer,
  two: quoteReducer2,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);
export default store;
