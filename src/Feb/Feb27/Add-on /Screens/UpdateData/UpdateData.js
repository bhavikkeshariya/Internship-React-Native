import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {update} from '../../Store/Action';
import styles from './style';

const UpdateData = ({navigation}) => {
  const dispatch = useDispatch();
  const oldName = useSelector(store => store.data.Name);
  const oldEmail = useSelector(store => store.data.Email);
  const oldPassword = useSelector(store => store.data.Password);

  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [password, setPassword] = useState(oldPassword);

  const goTo = () => {
    if (name == '' || email == '' || password == '') {
      ToastAndroid.show('Enter a Data', ToastAndroid.SHORT);
    } else {
      dispatch(update({Name: name, Email: email, Password: password}));
      navigation.navigate('Screen1');
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
          <Text style={styles.add}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateData;
