import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './style';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('Splash');
      navigation.navigate('Login');
    }, 4000);
  }, []);

  return (
    <View style={styles.mainView}>
      <LottieView
        source={require('../../Assets/Images/Logo.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;
