import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import Feb14_2 from './Feb14_2';
import Feb14_3 from './Feb14_3';

const Feb14_1 = () => {
  const Drawer = createDrawerNavigator();
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator>
        <Drawer.Screen name="draw2" component={Feb14_2} />
        <Drawer.Screen name="draw3" component={Feb14_3} />
      </Drawer.Navigator>
    </View>
  );
};

export default Feb14_1;
