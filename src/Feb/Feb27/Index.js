import {Provider} from 'react-redux';
import Navigate from './Add-on /Navigation/Navigation';
import store from './Add-on /Store/Store';

const Index = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

export default Index;
