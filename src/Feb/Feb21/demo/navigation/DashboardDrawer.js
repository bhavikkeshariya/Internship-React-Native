import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {DashBoard, Inbox, Profile} from '../screens';

const DashboardDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={DashBoard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Food" component={Inbox} />
      </Drawer.Navigator>
    </View>
  );
};

export default DashboardDrawer;
