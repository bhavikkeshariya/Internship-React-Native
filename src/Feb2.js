import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Feb2 = () => {
  const [setLoading, setsetLoading] = useState(false);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome to Creole Studios</Text>
      <ActivityIndicator style={styles.ai} animating={setLoading} />
      <Button
        title="Press Me"
        onPress={() => {
          setsetLoading(!setLoading),
            Alert.alert('You want to stop Activity Indicator');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 70,
    paddingRight: 70,
  },
  ai: {
    justifyContent: 'center',
    paddingBottom: 50,
    size: 'large',
    color: 'white',
  },
  text: {
    color: 'white',
    paddingBottom: 80,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default Feb2;
