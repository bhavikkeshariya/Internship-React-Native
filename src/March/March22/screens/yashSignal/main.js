import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

const MainScreen = () => {
  const [color, setColor] = useState({
    signal1: '',
    signal2: '',
    signal3: '',
    signal4: '',
  });

  const [second, setSecond] = useState('2');
  const [sec, setSec] = useState('2');

  const [visible, setvisible] = useState(true);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const main = setTimeout(() => {
      setGo(true);
    });
    if (go == true) {
      changeSignal1(), console.log(sec);
    } else {
      null;
      setGo(false);
    }
  }, [go]);

  const changeSignal1 = () => {
    setColor({
      signal1: 'green',
      signal2: '',
      signal3: '',
      signal4: '',
    });
    setTimeout(() => {
      changeSignal2();
    }, sec * 1000);
  };

  const changeSignal2 = () => {
    setColor({
      signal1: '',
      signal2: 'green',
      signal3: '',
      signal4: '',
    });
    setTimeout(() => {
      changeSignal3();
    }, sec * 1000);
  };

  const changeSignal3 = () => {
    setColor({
      signal1: '',
      signal2: '',
      signal3: 'green',
      signal4: '',
    });
    setTimeout(() => {
      changeSignal4();
    }, sec * 1000);
  };
  const changeSignal4 = () => {
    setColor({
      signal1: '',
      signal2: '',
      signal3: '',
      signal4: 'green',
    });
    setTimeout(() => {
      changeSignal1();
    }, sec * 1000);
  };
  const onClick = () => {
    setTimeout(() => {
      setvisible(true);
      console.log(sec);
    }, 1000);
  };

  const pauseSec = () => {
    setSec('0');
    setvisible(false);
  };
  if (color.signal1 == 'green') {
    console.log('Signal1', sec);
  }
  if (color.signal2 == 'green') {
    console.log('Signal2', sec);
  }
  if (color.signal3 == 'green') {
    console.log('Signal3', sec);
  }
  if (color.signal4 == 'green') {
    console.log('Signal4', sec);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topView}>
        <Text
          style={[
            styles.textView1,
            {backgroundColor: color.signal1 == 'green' ? 'green' : 'red'},
          ]}>
          1
        </Text>
        <Text
          style={[
            styles.textView2,
            {backgroundColor: color.signal2 == 'green' ? 'green' : 'red'},
          ]}>
          2
        </Text>
      </View>
      <View style={styles.middleView}>
        <Text
          style={[
            styles.textView4,
            {backgroundColor: color.signal4 == 'green' ? 'green' : 'red'},
          ]}>
          4
        </Text>
        <Text
          style={[
            styles.textView3,
            {backgroundColor: color.signal3 == 'green' ? 'green' : 'red'},
          ]}>
          3
        </Text>
      </View>

      {visible ? (
        <TouchableOpacity onPress={pauseSec}>
          <Text style={{alignSelf: 'center', textDecorationLine: 'underline'}}>
            Click to set seconds
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            style={Platform.OS == 'ios' ? styles.inputIOS : styles.inputAndroid}
            value={second}
            onChangeText={t => setSecond(t)}
            keyboardType="number-pad"
          />

          <View style={styles.btn_view}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setSec(second), onClick();
              }}>
              <Text style={styles.text_inside_btn}>Set Seconds</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
