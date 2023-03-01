import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Navigate = () => {
  return (
    <View>
      <Text>Navigation</Text>
    </View>
  );
};

export default Navigate;
