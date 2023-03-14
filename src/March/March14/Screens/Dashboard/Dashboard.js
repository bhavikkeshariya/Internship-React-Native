import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Dashboard = () => {
  const [data, setData] = useState('');

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data, console.log(data));
      });
  };
  const postData = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Bhavik',
        username: 'BK',
        email: 'bhavik@grateful.com',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data), setData(data);
      });
  };

  const deleteData = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data), setData(data);
      });
  };

  const Compo = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTxt}>NAME: {item.name}</Text>
        <Text style={styles.itemTxt}>USERNAME: {item.username}</Text>
        <Text style={styles.itemTxt}>EMAIL: {item.email}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <FlatList data={data} renderItem={Compo} />
      <View style={styles.buttons}>
        {/* <TouchableOpacity style={styles.button} onPress={getData}>
          <Text style={styles.buttonTxt}>GET DATA</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={postData}>
          <Text style={styles.buttonTxt}>POST DATA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteData}>
          <Text style={styles.buttonTxt}>DELETE DATA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
