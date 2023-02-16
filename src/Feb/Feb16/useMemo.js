import React, {useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Feb16_3 = () => {
  const [count, setCount] = useState(0);
  const [countOne, setCountOne] = useState(0);

  const toSee = useMemo(() => {
    for (i = 0; i < 20000000; i++) {
      console.log('.....');
      return count % 2 === 0;
    }
  }, [count]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{padding: 10, backgroundColor: 'blue', margin: 25}}
        onPress={() => setCount(count + 1)}>
        <Text style={{color: 'white'}}>Press to increase {count} by 1</Text>
      </TouchableOpacity>
      <Text style={{color: 'white', fontSize: 15, margin: 25}}>
        {toSee ? 'Even' : 'Odd'}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{padding: 10, backgroundColor: 'blue'}}
        onPress={() => setCountOne(countOne + 1)}>
        <Text style={{color: 'white'}}>Press to increase {countOne} by 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb16_3;
