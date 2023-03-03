import database from '@react-native-firebase/database';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Profile = ({navigation, route}) => {
  const userData = route.params;
  const Username = userData[0];
  const UserPassword = userData[1];

  const [name, setName] = useState(Username);
  const [password, setPassword] = useState(UserPassword);

  const submit = () => {
    navigation.navigate('Screen1');
  };

  const Update = () => {
    database()
      .ref('/user/' + Username)
      .update({
        Username: name,
        Password: password,
      })
      .then(() => console.log('Data updated.'));
  };

  const deleteID = () => {
    database()
      .ref('/user/' + Username)
      .remove();

    navigation.navigate('Register');
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.head}>Name</Text>
      <TextInput
        value={name}
        onChangeText={newName => setName(newName)}
        style={styles.input}
      />
      <Text style={styles.head}>Password</Text>
      <TextInput
        value={password}
        onChangeText={newName => setPassword(newName)}
        style={styles.input}
      />
      <TouchableOpacity onPress={Update}>
        <Text style={styles.button}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={submit}>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteID}>
        <Text style={styles.button}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
