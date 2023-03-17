import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const Splash = ({navigation}) => {
  const currentProfile = auth().currentUser;

  setTimeout(() => {
    navigation.navigate('Dashboard');
  }, 2000);

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>KRDA</Text>
      <LottieView
        source={require('../../../../Assets/Images/splash.json')}
        autoPlay
      />
    </View>
  );
};

export default Splash;
