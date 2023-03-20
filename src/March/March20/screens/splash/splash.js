import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 2000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>GAMENIA</Text>
      <LottieView
        source={require('../../../../Assets/Images/game.json')}
        autoPlay
      />
    </View>
  );
};

export default Splash;
