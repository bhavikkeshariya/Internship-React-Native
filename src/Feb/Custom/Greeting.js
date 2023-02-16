import React, {memo} from 'react';
import {Text, View} from 'react-native';

const Greeting = props => {
  console.log('Rendered');
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

export default memo(Greeting);
