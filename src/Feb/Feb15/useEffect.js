import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

const Feb15_2 = () => {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    if (bgColor === 'black') {
      console.log('You racist');
      Alert.alert('You Racist');
    }
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
      }}>
      <Text
        style={{
          color: bgColor === 'black' ? 'white' : 'black',
          marginVertical: 25,
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        The background color is {bgColor}
      </Text>
      <TouchableOpacity
        style={{
          padding: 5,
          backgroundColor: bgColor === 'black' ? 'white' : 'black',
        }}
        onPress={() => setBgColor(bgColor === 'black' ? 'white' : 'black')}>
        <Text
          style={{
            color: bgColor === 'black' ? 'black' : 'white',
            marginVertical: 5,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Change background color to {bgColor === 'black' ? 'white' : 'black'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb15_2;
