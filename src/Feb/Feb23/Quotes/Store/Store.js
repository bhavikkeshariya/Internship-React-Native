import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import quoteReducer from './Reducer';

const store = createStore(quoteReducer, applyMiddleware(thunk));
export default store;
