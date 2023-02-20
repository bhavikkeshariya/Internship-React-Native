import {Provider} from 'react-redux';

import Screen from './Redux/Screen/Screen';
import store from './Redux/store';

const apply = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default apply;
