import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import styles from './style';

const SplashS = ({navigation}) => {
  fetchData = async () => {
    try {
      const Name = await AsyncStorage.getItem('Name');
      const Password = await AsyncStorage.getItem('Password');
      console.log(Name);
      console.log(Password);

      if (Name !== 'Bhavik' || Password !== '123456') {
        // We have data!!
        navigation.navigate('Screen1');
      } else {
        navigation.navigate('Screen2');
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>LESGO</Text>
      <LottieView
        source={require('../../../../../Assets/Images/LoaderSplash.json')}
        autoPlay
      />
    </View>
  );
};

export default SplashS;
