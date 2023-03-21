import {useEffect, useState} from 'react';
import {
  ActionSheetIOS,
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  Image,
  Linking,
  Platform,
  SafeAreaView,
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
  Icon.loadFont();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.userSlice);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('title');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());

    const back = () => {
      Alert.alert('Exit App?', 'Are you sure you want to exit app?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', back);
    return () => backHandler.remove();
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
    if (Platform.OS == 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Search by Title', 'Search by Genre'],
          cancelButtonIndex: 0,
          userInterfaceStyle: 'light',
        },
        buttonIndex => {
          if (buttonIndex === 0) {
          } else if (buttonIndex === 1) {
            setSearchType('title');
          } else if (buttonIndex === 2) {
            setSearchType('genre');
          }
        },
      );
    } else {
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
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.view}>
        <TextInput
          style={Platform.OS == 'ios' ? styles.inputIOS : styles.input}
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
    </SafeAreaView>
  );
};

export default Dashboard;
