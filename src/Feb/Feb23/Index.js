import React from 'react';
import {Provider} from 'react-redux';
//import Quotes from './Quotes/Screens/Quotes';
import Stopwatch from './stopwatch/screens/Stopwatch';
import store from './stopwatch/store/store';
//import store from './Quotes/Store/Store';

const Index = () => {
  return (
    <Provider store={store}>
      <Stopwatch />
      {/* <Quotes /> */}
    </Provider>
  );
};

export default Index;
