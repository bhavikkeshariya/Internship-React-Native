import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import Greeting from './Greeting';

const Loader = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <LottieView
        source={require('../../Assets/Images/LoaderIcon.json')}
        autoPlay
      />
      <Greeting name="Bhavik" color="white" size="50" weight="bold" />
      <Greeting name="Keshariya" color="red" size="25" weight="bold" />
    </View>
  );
};

export default Loader;
