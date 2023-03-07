import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goTo = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Dashboard');
      });
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>LOGIN</Text>
      <View style={styles.inputView}>
        <Text style={styles.head}>Email</Text>
        <TextInput
          placeholder="Email..."
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
          onChangeText={newEmail => setPassword(newEmail)}
          placeholderTextColor="black"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => goTo()}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
