import {Header} from '@react-navigation/elements';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    value: '1',
    label: 'India',
    isSelected: false,
    path: require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/src/Assets/Images/India.png'),
  },
  {value: '2', label: 'United States', isSelected: false},
  {value: '3', label: 'Japan', isSelected: false},
  {value: '4', label: 'United Kingdom', isSelected: false},
  {value: '5', label: 'France', isSelected: false},
];
const Feb17_2 = () => {
  const [value, setValue] = useState(null);

  return (
    <SafeAreaProvider>
      <Header
        title="Choose a Country"
        headerStyle={{backgroundColor: 'white'}}
        headerTitleStyle={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 25,
        }}
        headerTitleAlign={'center'}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          paddingHorizontal: 25,
          paddingVertical: 50,
        }}>
        <View
          style={{
            borderWidth: 3,
            borderColor: 'cyan',
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'white',
          }}>
          <Dropdown
            containerStyle={{
              borderRadius: 5,
              borderWidth: 3,
              borderColor: 'orange',
              marginTop: 1,
            }}
            placeholderStyle={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
            }}
            selectedTextStyle={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
            }}
            data={DATA}
            labelField="label"
            valueField="value"
            placeholder="Search Country"
            value={value}
            onChange={item => setValue(item.value)}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Feb17_2;
