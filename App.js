import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Feb13_1 from './src/Feb/Feb13_1';
import Feb13_2 from './src/Feb/Feb13_2';
import Feb13_3 from './src/Feb/Feb13_3';
import Feb13_4 from './src/Feb/Feb13_4';
import Feb13_5 from './src/Feb/Feb13_5';
import Feb13_6 from './src/Feb/Feb13_6';

const Home1 = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'basketball' : 'basketball-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Icon name={iconName} size={size} color={'pink'} />;
        },
        tabBarLabelStyle: {
          color: 'pink',
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Feb13_2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Activity"
        component={Feb13_3}
        options={{
          headerShown: false,
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Feb13_4}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Add"
        component={Feb13_5}
        options={{headerShown: false, tabBarBadge: 9}}
      />
      <Tab.Screen
        name="Profile"
        component={Feb13_6}
        options={{headerShown: false, tabBarBadge: 1}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
        <Stack.Screen
          name="Home2"
          component={Feb13_1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home1"
          component={Home1}
          options={({route}) => ({
            title: 'Hello ' + route.params.myName,
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
  );
};
export default App;
