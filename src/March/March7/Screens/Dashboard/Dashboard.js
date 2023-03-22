import auth from '@react-native-firebase/auth';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Dashboard = ({navigation}) => {
  const submit = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.mainText}> DashBoard</Text>
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
