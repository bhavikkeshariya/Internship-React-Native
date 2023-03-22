import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './style';

const Signal = () => {
  const [signalOne, setSignalOne] = useState(true);
  const [signalTwo, setSignalTwo] = useState(false);
  const [signalThree, setSignalThree] = useState(false);
  const [signalFour, setSignalFour] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setSignalOne(true);
      setSignalTwo(false);
      setSignalThree(false);
      setSignalFour(false);
    }, 4000);

    setInterval(() => {
      setSignalOne(false);
      setSignalTwo(true);
      setSignalThree(false);
      setSignalFour(false);
    }, 4000);
    setInterval(() => {
      setSignalOne(false);
      setSignalTwo(false);
      setSignalThree(true);
      setSignalFour(false);
    }, 4000);
    setInterval(() => {
      setSignalOne(false);
      setSignalTwo(false);
      setSignalThree(false);
      setSignalFour(true);
    }, 4000);
  });

  return (
    <SafeAreaView style={styles.junction}>
      <View style={styles.top}>
        <View
          style={[
            styles.signalOne,
            {backgroundColor: signalOne ? 'green' : 'red'},
          ]}
        />
      </View>
      <View style={styles.middle}>
        <View
          style={[
            styles.signalTwo,
            {backgroundColor: signalTwo ? 'green' : 'red'},
          ]}
        />
        <View
          style={[
            styles.signalThree,
            {backgroundColor: signalThree ? 'green' : 'red'},
          ]}
        />
      </View>

      <View style={styles.bottom}>
        <View
          style={[
            styles.signalFour,
            {backgroundColor: signalFour ? 'green' : 'red'},
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signal;
