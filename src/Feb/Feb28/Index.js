import React from 'react';
import {Provider} from 'react-redux';
import Navigate from './Cart/Navigation/navigation';
import store from './Cart/Store/Store';

const Index = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

export default Index;
