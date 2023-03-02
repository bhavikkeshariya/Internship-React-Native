import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Login, Register, SplashS} from '../screens';
import DashboardNavigation from './DashboardNavigation';

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Screen1"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen2"
            component={DashboardNavigation}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Splash"
            component={SplashS}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigate;
