import {Header} from '@react-navigation/elements';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Have used React-Native-Draggable-Flatlist Library

const DATA = [
  {
    id: '1',
    toDo: 'Go to Gym',
    color: 'yellow',
  },
  {
    id: '2',
    toDo: 'Office Work',
    color: 'green',
  },
  {
    id: '3',
    toDo: 'Meeting',
    color: 'blue',
  },
  {
    id: '4',
    toDo: 'Client Call',
    color: 'red',
  },
  {
    id: '5',
    toDo: 'Movie time',
    color: 'violet',
  },
  {
    id: '6',
    toDo: 'Lunch',
    color: 'cyan',
  },
  {
    id: '7',
    toDo: 'Sleep',
    color: 'orange',
  },
];

const Feb17_1 = () => {
  const [data, setData] = useState(DATA);
  return (
    <SafeAreaProvider>
      <Header
        title="TO-DO"
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
          backgroundColor: 'black',
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <GestureHandlerRootView>
          <DraggableFlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            onDragEnd={({data}) => setData(data)}
            renderItem={({item, drag, isActive, index}) => {
              return (
                <ScaleDecorator>
                  <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}
                    style={{
                      paddingVertical: 30,
                      paddingHorizontal: 20,
                    }}>
                    <View
                      style={{
                        borderWidth: 4,
                        borderColor: item.color,
                        borderRadius: 15,
                        paddingVertical: 35,
                        backgroundColor: 'black',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 25,
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.toDo}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ScaleDecorator>
              );
            }}
          />
        </GestureHandlerRootView>
      </View>
    </SafeAreaProvider>
  );
};

export default Feb17_1;
