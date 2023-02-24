import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Quotes from '../Screens/Quotes';
import SitcomQuotes from '../Screens/SitcomQuotes';

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Quotes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sitcom-Quotes"
            component={SitcomQuotes}
            options={() => ({
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigate;
