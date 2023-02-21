import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/action';
import styles from './style';

const DashBoard = ({navigation}) => {
  const dispatch = useDispatch();
  const submit = () => {
    navigation.navigate('Screen1');
    dispatch(logout('', ''));
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>DashBoard</Text>
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashBoard;
