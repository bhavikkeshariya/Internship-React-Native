import React from 'react';
import {Provider} from 'react-redux';
import Navigate from './Quotes/Navigation/Navigation';
// import Stopwatch from './stopwatch/screens/Stopwatch';
// import store from './stopwatch/store/store';
import store from './Quotes/Store/Store';

const Index = () => {
  return (
    <Provider store={store}>
      {/* <Stopwatch /> */}
      <Navigate />
    </Provider>
  );
};

export default Index;
