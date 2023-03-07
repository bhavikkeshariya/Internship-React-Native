import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');

  const goTo = async () => {
    if (number.length == 10) {
      const confirmation = await auth().signInWithPhoneNumber('+91' + number);
      console.log(confirmation);
      navigation.navigate('OTP', {confirmation: confirmation});
    } else {
      ToastAndroid.show('Invalid Number', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Verify your phone number</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Phone Number..."
          value={number}
          onChangeText={newNum => setNumber(newNum)}
          placeholderTextColor="black"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => goTo()}>
        <Text style={styles.btnText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
