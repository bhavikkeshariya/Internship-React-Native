import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Inbox, Profile} from '../screens';
import DashboardDrawer from './DashboardDrawer';

const DashboardNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let IconName;
          if (route.name === 'Dashboard') {
            IconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            IconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Food') {
            IconName = focused ? 'fast-food' : 'fast-food-outline';
          }
          return <Icon name={IconName} size={size} />;
        },
      })}>
      <Tab.Screen name="Food" component={Inbox} />
      <Tab.Screen
        name="Dashboard"
        component={DashboardDrawer}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default DashboardNavigation;
