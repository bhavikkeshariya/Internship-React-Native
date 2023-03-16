import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Dashboard = () => {
  const [data, setData] = useState('');
  const getData = () => {
    fetch('http://www.krdagujarat.in/api/customer/user_list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data), setData(data.data);
      });
  };

  const Compo = ({item}) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.img}
          source={{
            uri: `http://krdagujarat.in/uploads/user_thumb/${item.image}`,
          }}
        />
        <Text style={styles.itemTxt}>
          Name: {item.first_name + ' ' + item.last_name}
        </Text>
        <Text style={styles.itemTxt}>Category: {item.category}</Text>
        <Text style={styles.itemTxt}>Email: {item.email}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <FlatList data={data} numColumns={2} renderItem={Compo} />
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.buttonTxt}>GET DATA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
