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

const UpdateData = ({navigation, route}) => {
  const dispatch = useDispatch();

  const oldData = useSelector(store => store.data);
  const oldName = useSelector(store => store.data[route.params.index].Name);
  const oldEmail = useSelector(store => store.data[route.params.index].Email);
  const oldPassword = useSelector(
    store => store.data[route.params.index].Password,
  );
  var index = route.params.index;

  const [state, setState] = useState(oldData);

  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [password, setPassword] = useState(oldPassword);

  const goTo = () => {
    if (name == '' || email == '' || password == '') {
      ToastAndroid.show('Enter a Data', ToastAndroid.SHORT);
    } else if (
      oldName !== name ||
      oldEmail !== email ||
      oldPassword !== password
    ) {
      let data = JSON.parse(JSON.stringify(state));
      data[index].Name = name;
      data[index].Email = email;
      data[index].Password = password;
      dispatch(update(data));
      navigation.navigate('Register Users');
    } else {
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
          <Text style={styles.add}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateData;
