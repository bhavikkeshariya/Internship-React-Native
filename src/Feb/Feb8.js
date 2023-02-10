import React from 'react';
import {Alert, Button, View} from 'react-native';

const Feb8 = () => {
  return (
    <View>
      <Button
        title="Press me"
        onPress={() =>
          Alert.alert(
            'Are you sure?',
            'Are you sure you want to leave creole studios?',
            [
              {
                text: 'Yes',
                onPress: () => console.log('Left'),
              },
              {
                text: 'Definitely yes',
                onPress: () => console.log('Horaah'),
              },
            ],
          )
        }
      />
    </View>
  );
};
export default Feb8;
