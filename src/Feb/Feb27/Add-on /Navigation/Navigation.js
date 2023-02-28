import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Dashboard from '../Screens/Dashboard/Dashboard';
import RegisterData from '../Screens/RegisterData/RegisterData';
import UpdateData from '../Screens/UpdateData/UpdateData';

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register Users">
          <Stack.Screen
            name="Register Users"
            component={Dashboard}
            options={() => ({
              headerStyle: {
                backgroundColor: '#C95B6C',
              },
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              headerTintColor: 'black',
            })}
          />
          <Stack.Screen
            name="Add User"
            component={RegisterData}
            options={() => ({
              headerStyle: {
                backgroundColor: '#C95B6C',
              },
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              headerTintColor: 'black',
            })}
          />
          <Stack.Screen
            name="Update Data"
            component={UpdateData}
            options={() => ({
              headerStyle: {
                backgroundColor: '#C95B6C',
              },
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              headerTintColor: 'black',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigate;
