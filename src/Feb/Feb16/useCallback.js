import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Greeting from '../Custom/Greeting';

const Feb16_2 = () => {
  const [count, setCount] = useState(0);

  const doNot = useCallback(() => {
    console.log('Hello');
  }, ['Bhavik']);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Greeting
        name="Bhavik"
        color="white"
        size="50"
        weight="bold"
        doNot={doNot}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{padding: 10, backgroundColor: 'blue'}}
        onPress={() => setCount(count + 1)}>
        <Text style={{color: 'white'}}>Press to increase {count} by 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb16_2;
