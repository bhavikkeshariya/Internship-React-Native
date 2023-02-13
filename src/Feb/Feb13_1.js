import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const Feb13_1 = ({navigation}) => {
  const [show, setshow] = useState(true);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const submit = () => {
    if (userName == 'Bhavik' && userPassword == '123456') {
      navigation.navigate('Home1', {myName: `${userName}`});
    } else {
      ToastAndroid.show('Invalid Username or Password', ToastAndroid.SHORT);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 25,
      }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: 'black',
          marginVertical: 10,
          alignSelf: 'center',
        }}>
        REGISTER
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginVertical: 10,
        }}>
        Name
      </Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}}
        placeholder="Username"
        value={userName}
        onChangeText={uName => setUserName(uName)}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginVertical: 10,
        }}>
        Password
      </Text>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'black',
          marginVertical: 10,
        }}>
        <TextInput
          style={{
            width: 310,
          }}
          placeholder="*********"
          secureTextEntry={show}
          value={userPassword}
          onChangeText={uPassword => setUserPassword(uPassword)}
        />
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => setshow(!show)}>
          <Image
            style={{
              alignSelf: 'flex-end',
              width: 25,
              height: 30,
              margin: 10,
              right: 15,
            }}
            source={require('../Assets/Images/eye.jpg')}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={submit}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginVertical: 10,
            alignSelf: 'center',
            backgroundColor: 'black',
            padding: 10,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb13_1;
