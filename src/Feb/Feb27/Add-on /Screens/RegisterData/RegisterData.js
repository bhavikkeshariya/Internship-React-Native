import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../Store/Action';
import styles from './style';

const RegisterData = ({navigation}) => {
  const dispatch = useDispatch();
  const newItem = useSelector(store => store);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goTo = () => {
    if (name == '' || email == '' || password == '') {
      ToastAndroid.show('Enter a Data', ToastAndroid.SHORT);
    } else {
      dispatch(add({Name: name, Email: email, Password: password}));
      navigation.navigate('Register Users');
    }
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.head}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a Name"
        value={name}
        onChangeText={inName => setName(inName)}
      />
      <Text style={styles.head}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a Email"
        value={email}
        onChangeText={inEmail => setEmail(inEmail)}
      />
      <Text style={styles.head}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a Password"
        value={password}
        onChangeText={inPassword => setPassword(inPassword)}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={goTo}>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterData;
