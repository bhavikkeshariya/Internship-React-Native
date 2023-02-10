import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Feb9 = () => {
  //Animated
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const bounce = () => {
    Animated.spring(fadeAnim, {
      toValue: {x: 0, y: 0},
      useNativeDriver: true,
    });
  };

  //Keyboard
  const [keyboardStatus, setkeyboardStatus] = useState('');
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setkeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setkeyboardStatus('Keyboard Hidden');
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });

  return (
    <View style={styles.view1}>
      <Animated.View
        style={[
          styles.main,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.text}>Welcome to Creole Studios</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Press Me" onPress={fadeIn} />
        <Button title="Erase Me" onPress={fadeOut} />
      </View>

      {/* Keyboard */}
      <View>
        <TextInput
          placeholder="How are you?"
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text>{keyboardStatus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    padding: 20,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});
export default Feb9;
