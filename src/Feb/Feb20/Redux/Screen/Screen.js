import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../Burger/burgerAction';

const Screen = () => {
  const dispatch = useDispatch();
  const numberOfBurger = useSelector(store => store.count.count);

  const increaseBurger = () => dispatch(increment());
  const decreaseBurger = () => dispatch(decrement());
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginVertical: 100,
          color: 'black',
        }}>
        Number Of Burger = {numberOfBurger}
      </Text>

      <Button title="Increase Burger" onPress={increaseBurger} />
      <Button title="Decrease Burger" onPress={decreaseBurger} />
    </View>
  );
};

export default Screen;
