import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './style';

const Cart = () => {
  const item = useSelector(store => store);
  console.log(item);

  const renderItem = () => {
    return (
      <View style={styles.products}>
        <Text style={styles.head}>{item.name}</Text>
        <View style={styles.priceView}>
          <Text style={styles.price}>MRP:</Text>
          <Text style={styles.valueMrp}> ₹ {item.MRP}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.price}>Discounted Price:</Text>
          <Text style={styles.valueDs}> ₹ {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      {/* <FlatList data={} renderItem={renderItem} /> */}
    </View>
  );
};

export default Cart;
