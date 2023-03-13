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
  const [confirm, setConfirm] = useState('');
  const [code, setCode] = useState('');

  const goTo = async () => {
    if (number.length == 10) {
      const confirmation = await auth().signInWithPhoneNumber('+91' + number);

      console.log(confirmation);
      setConfirm(confirmation);
      setNumber('');
    } else {
      ToastAndroid.show('Invalid Number', ToastAndroid.SHORT);
    }
  };

  const goTo2 = async () => {
    try {
      await confirm.confirm(code);
      navigation.navigate('Dashboard');
      setConfirm(''), setCode('');
    } catch (error) {
      console.log(error);
      alert('Invalid code');
    }
  };
  if (!confirm) {
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
  }
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Enter the OTP</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="..."
          value={code}
          onChangeText={newNum => setCode(newNum)}
          placeholderTextColor="black"
          style={styles.input}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => goTo2()}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
