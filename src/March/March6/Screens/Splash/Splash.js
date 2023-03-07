import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const SplashS = ({navigation}) => {
  const currentProfile = auth().currentUser;

  setTimeout(() => {
    if (!currentProfile) {
      navigation.navigate('Login');
    } else {
      console.log(currentProfile);
      navigation.navigate('Dashboard');
    }
  }, 2000);

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>LESGO</Text>
      <LottieView
        source={require('../../../../Assets/Images/LoaderSplash.json')}
        autoPlay
      />
    </View>
  );
};

export default SplashS;
