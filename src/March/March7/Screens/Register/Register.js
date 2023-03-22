import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

const Register = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [email, setEmail] = useState('');

  const check = () => {
    if (email !== '' && password == cPassword) {
      goTo();
    } else if (password != cPassword) {
      ToastAndroid.show('Password does not match', ToastAndroid.SHORT);
    } else if (email == '' || password == '' || cPassword == '') {
      ToastAndroid.show('Enter Details', ToastAndroid.SHORT);
    }
  };
  const goTo = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.text}>Register with Email</Text>
      <View style={styles.inputView}>
        <Text style={styles.head}>Email</Text>
        <TextInput
          placeholder="Email Address..."
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
          placeholderTextColor="black"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.head}>Password</Text>
        <TextInput
          placeholder="Password..."
          value={password}
          onChangeText={newPassword => setPassword(newPassword)}
          placeholderTextColor="black"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.head}>Confirm Password</Text>
        <TextInput
          placeholder="Password..."
          value={cPassword}
          onChangeText={newPassword => setCPassword(newPassword)}
          placeholderTextColor="black"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => check()}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
