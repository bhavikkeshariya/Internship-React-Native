import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Dashboard = ({navigation}) => {
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => console.log('Token => ' + token));
  });
  const submit = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}> DashBoard</Text>
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
