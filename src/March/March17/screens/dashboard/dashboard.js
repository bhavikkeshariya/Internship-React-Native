import axios from 'axios';
import {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './style';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=500`)
      .then(data => {
        console.log(data.data.results), setUsers(data.data.results);
      });
  };
  const getData = ({item}) => {
    return (
      <View style={styles.flatListitem}>
        <Image style={styles.profileImg} source={{uri: item.picture.large}} />
        <View style={styles.itemStyle}>
          <Text
            style={
              styles.textName
            }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.textName}>{item.email}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={users}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={getData}
        keyExtractor={item => item.email}
        renderItem={getData}
      />
    </View>
  );
};

export default Dashboard;
