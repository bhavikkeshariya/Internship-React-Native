import React, {useState} from 'react';
import {Alert, Button, FlatList, Text, View} from 'react-native';

const Feb3 = () => {
  const [dButton, setdButton] = useState(true);
  const DATA = [
    {
      name: 'Bhavik',
      technology: 'React-Native',
    },
    {
      name: 'Yash',
      technology: 'React-Native',
    },
    {
      name: 'Savan',
      technology: 'Flutter',
    },
  ];

  const makeButtonDisappear = () => {
    return Alert.alert('Are you sure?', 'You want to delete this button?', [
      //If Yes Button
      {
        text: 'Yes',
        onPress: () => {
          setdButton(false);
        },
      },
      //If No Button
      {
        text: 'No',
      },
    ]);
  };

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>
          February 3
        </Text>
      </View>
      <View>
        {dButton ? (
          <Button title="Delete me" onPress={() => makeButtonDisappear()} />
        ) : null}
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={element => {
            return (
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'blue',
                  alignSelf: 'center',
                }}>
                {element.item.name}
              </Text>
              //   (<Text>{element.item.technology}</Text>)
            );
          }}
        />
      </View>
    </View>
  );
};
export default Feb3;
