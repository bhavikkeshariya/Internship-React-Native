import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://www.krdagujarat.in/api/customer/user_list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data), setData(data.data), setLoading(false);
      });
  }, []);

  const goDetails = id => {
    setLoading(true);
    fetch(`http://www.krdagujarat.in/api/customer/user_details/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        navigation.navigate('Profile', {data: data}), setLoading(false);
      });
  };

  const Compo = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            goDetails(item.id);
          }}>
          <Image
            style={styles.img}
            source={{
              uri: `http://krdagujarat.in/uploads/user_thumb/${item.image}`,
            }}
          />
          <View style={styles.view}>
            <Text style={styles.itemTxt}>
              Name: {item.first_name + ' ' + item.last_name}
            </Text>
            <Text style={styles.itemTxt}>Category: {item.category}</Text>
            <Text style={styles.itemTxt}>Email: {item.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      {loading ? (
        <LottieView
          source={require('../../../../Assets/Images/search.json')}
          autoPlay
        />
      ) : (
        <FlatList data={data} renderItem={Compo} />
      )}
    </View>
  );
};

export default Dashboard;
