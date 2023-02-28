import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../Screens/Cart/Cart';
import Products from '../Screens/Products/Products';

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PRODUCTS">
        <Stack.Screen
          name="PRODUCTS"
          component={Products}
          options={() => ({
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
            },
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="CART"
          component={Cart}
          options={() => ({
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
