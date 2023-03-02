import {Provider} from 'react-redux';
import Navigate from './demo/navigation/LoginNavigate';
import store from './demo/store/store';

const Index = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};

export default Index;
