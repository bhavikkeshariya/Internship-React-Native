import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Dashboard = ({navigation}) => {
  const currentProfile = auth().currentUser;
  console.log(currentProfile);
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User logged out'));
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainView}>
      <Text>Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
