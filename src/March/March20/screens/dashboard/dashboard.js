import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Linking,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../redux/toolkit';
import styles from './style';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.userSlice);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('title');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const getData = ({item}) => {
    if (search === '') {
      return (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.flatListitem}
            onPress={() => Linking.openURL(item.game_url)}>
            <Image source={{uri: item.thumbnail}} style={styles.profileImg} />
            <View style={styles.itemStyle}>
              <Text style={styles.textName0}>{item.title}</Text>
              <Text style={styles.textName1}> {item.short_description}</Text>
              <Text style={styles.textName}>Genre: {item.genre}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (
      searchType === 'title'
        ? item.title.toLowerCase().includes(search.toLowerCase())
        : item.genre.toLowerCase().includes(search.toLowerCase())
    ) {
      return (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.flatListitem}
            onPress={() => Linking.openURL(item.game_url)}>
            <Image source={{uri: item.thumbnail}} style={styles.profileImg} />
            <View style={styles.itemStyle}>
              <Text style={styles.textName0}>{item.title}</Text>
              <Text style={styles.textName}>Developer: {item.developer}</Text>
              <Text style={styles.textName}>Genre: {item.genre}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? <ActivityIndicator size="large" color="#F0CCC0" /> : null}
      </View>
    );
  };

  const searchList = () => {
    Alert.alert('FILTERS', 'Apply Filters', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Search by Genre',
        onPress: () => {
          setSearchType('genre'),
            ToastAndroid.show('Search by Genre', ToastAndroid.SHORT);
        },
      },
      {
        text: 'Search by Title',
        onPress: () => {
          setSearchType('title'),
            ToastAndroid.show('Search by Title', ToastAndroid.SHORT);
        },
      },
    ]);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Search a game..."
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <TouchableOpacity onPress={() => searchList()}>
          <Icon name={'filter'} size={25} color={'black'} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={user.user}
        onEndReached={() => setLoading(false)}
        renderItem={getData}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Dashboard;
