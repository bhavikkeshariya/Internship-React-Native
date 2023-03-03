import database from '@react-native-firebase/database';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';

const Login = ({navigation}) => {
  const [show, setshow] = useState(true);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();

  const newName = useSelector(store => store);

  const submit = () => {
    if (userName == '' || userPassword == '') {
      ToastAndroid.show('Please enter details!', ToastAndroid.SHORT);
    } else {
      database()
        .ref('/user/')
        .once('value')
        .then(snapshot => {
          const data = Object.values(snapshot.val());
          console.log(data);
          const isUser = data.filter(x => {
            console.log(x);
            return x.Username == userName && x.Password == userPassword;
          });
          if (isUser.length > 0) {
            ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
            navigation.navigate('Profile', [userName, userPassword]);
            setUserName(''), setUserPassword('');
          } else {
            ToastAndroid.show('Invalid credentials!', ToastAndroid.SHORT);
          }
        });
    }
  };
  const goTo = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>LOGIN</Text>
      <Text style={styles.inputTextHead}>Name</Text>
      <TextInput
        style={styles.inputText}
        value={userName}
        placeholder="Username"
        onChangeText={uName => {
          setUserName(uName), setDisable(true);
        }}
      />
      <Text style={styles.inputTextHead}>Password</Text>
      <View style={styles.viewMid}>
        <TextInput
          style={styles.textIn}
          placeholder="*********"
          secureTextEntry={show}
          value={userPassword}
          onChangeText={uPassword => {
            setUserPassword(uPassword), setDisable(false);
          }}
        />
        <TouchableOpacity style={styles.touch} onPress={() => setshow(!show)}>
          <Image
            style={styles.img}
            source={require('../../../../../Assets/Images/eye.jpg')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goTo}>
        <Text style={styles.register}>Register?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
        }}
        onPress={submit}
        disabled={disable ? true : false}>
        <Text
          style={[
            styles.button,
            {backgroundColor: disable ? 'gray' : 'black'},
          ]}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
