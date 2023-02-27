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
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen2"
            component={RegisterData}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen3"
            component={UpdateData}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigate;
