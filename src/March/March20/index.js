import React from 'react';
import {Provider} from 'react-redux';
import Navigate from './navigation/navigation';
import store from './redux/store';

const Index = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

export default Index;
