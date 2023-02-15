import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Feb15_1 = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text
        style={{
          color: 'white',
          marginVertical: 25,
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        You clicked {count} times
      </Text>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'white'}}
        onPress={() => setCount(count + 1)}>
        <Text style={{color: 'black'}}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb15_1;
