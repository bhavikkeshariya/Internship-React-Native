import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductsData from '../../Constants/ProductsData';
import styles from './style';

const Products = ({navigation}) => {
  const renderItem = ({item}) => {
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
  const goTo = () => {
    navigation.navigate('CART');
  };

  return (
    <View style={styles.mainView}>
      <FlatList data={ProductsData} renderItem={renderItem} />
      <View style={styles.cart}>
        <TouchableOpacity style={styles.cartButton} onPress={goTo}>
          <Icon name="opencart" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Products;
