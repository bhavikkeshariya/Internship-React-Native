import React from 'react';
import {Text, View} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text
        style={{
          color: `${props.color}`,
          fontWeight: `${props.weight}`,
          fontSize: Number(`${props.size}`),
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Greeting;
