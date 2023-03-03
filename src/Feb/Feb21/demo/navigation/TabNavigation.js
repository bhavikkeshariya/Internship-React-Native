import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Inbox, Profile} from '../screens';
import DashboardDrawer from './DashboardDrawer';

const TabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Food" component={Inbox} />
      <Tab.Screen name="Dashboard" component={DashboardDrawer} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
