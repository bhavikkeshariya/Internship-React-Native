import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteId} from '../../Store/Action';
import styles from './style';

const Dashboard = ({navigation}) => {
  const newItem = useSelector(store => store.data);
  console.log(newItem);
  const dispatch = useDispatch();

  const remove = index => {
    dispatch(deleteId(index));
  };
  const goToS3 = index => {
    navigation.navigate('Update Data', {index: `${index}`});
  };

  const Compo = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.display}
        onPress={() => goToS3(index)}
        onLongPress={() => remove(index)}>
        <Text style={styles.text}>Name : {item.Name}</Text>
        <Text style={styles.text}>Email : {item.Email}</Text>
        <Text style={styles.text}>Password : {item.Password}</Text>
      </TouchableOpacity>
    );
  };

  const goTo = () => {
    navigation.navigate('Add User');
  };
  return (
    <View style={styles.mainView}>
      <FlatList
        data={newItem}
        showsVerticalScrollIndicator={false}
        renderItem={Compo}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={goTo}>
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
