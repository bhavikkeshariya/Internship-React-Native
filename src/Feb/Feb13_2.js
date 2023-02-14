import React from 'react';
import {Button, View} from 'react-native';

const Feb13_2 = ({route, navigation}) => {
  //   const {myName} = route.params;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#5a97fa',
      }}>
      <Button
        title="Go to Drawer Navigator"
        onPress={() => navigation.navigate('Draw')}
        color="black"
      />
    </View>
  );
};
export default Feb13_2;
