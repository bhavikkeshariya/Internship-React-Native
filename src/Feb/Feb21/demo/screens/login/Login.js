import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/action';

import styles from './style';

const Login = ({navigation}) => {
  const todoInput = useRef();

  const [show, setshow] = useState(true);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const newName = useSelector(store => store);

  const submit = () => {
    if (userName == '' || userPassword == '') {
      ToastAndroid.show('Invalid Username or Password', ToastAndroid.SHORT);
    } else {
      dispatch(login(userName, userPassword));
      navigation.navigate('Screen2');
      setUserName(''), setUserPassword('');
    }
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>REGISTER</Text>
      <Text style={styles.inputTextHead}>Name</Text>
      <TextInput
        ref={todoInput}
        style={styles.inputText}
        value={userName}
        placeholder="Username"
        onChangeText={uName => {
          setUserName(uName);
        }}
      />
      <Text style={styles.inputTextHead}>Password</Text>
      <View style={styles.viewMid}>
        <TextInput
          style={styles.textIn}
          placeholder="*********"
          secureTextEntry={show}
          value={userPassword}
          onChangeText={uPassword => setUserPassword(uPassword)}
        />
        <TouchableOpacity style={styles.touch} onPress={() => setshow(!show)}>
          <Image
            style={styles.img}
            source={require('../../../../../Assets/Images/eye.jpg')}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={submit}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
