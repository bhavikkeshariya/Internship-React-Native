import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import styles from './style';

const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/LogoP.png')}
      />
      <Text style={styles.login}>LOGIN</Text>
      <View>
        <Text>Email:</Text>
        <TextInput placeholder="Enter your Email..." />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput placeholder="Enter a Password..." />
      </View>
    </View>
  );
};

export default SignUp;
