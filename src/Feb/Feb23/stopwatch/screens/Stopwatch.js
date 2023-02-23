import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {reset, start, stop} from '../store/action';
import styles from './style';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const Time = useSelector(store => store.Data.watch);
  //   const Going = useSelector(store => store.Data.timing);
  const [disable, setDisable] = useState(false);

  const Start = () => {
    setDisable(true);
    setInterval(() => {
      dispatch(start());
    }, 1000);
  };

  const Stop = () => dispatch(stop());
  const Reset = () => dispatch(reset());
  return (
    <View style={styles.mainView}>
      <Text style={styles.watch}>{Time}</Text>
      <View style={styles.midView}>
        <TouchableOpacity
          activeOpacity={0}
          style={[styles.button, {backgroundColor: disable ? 'gray' : 'pink'}]}
          disabled={disable ? true : false}
          onPress={Start}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0}
          style={[styles.button, {backgroundColor: disable ? 'pink' : 'gray'}]}
          disabled={disable ? false : true}
          onPress={Stop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.midView}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: disable ? 'pink' : 'gray'}]}
          disabled={disable ? false : true}
          onPress={Reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stopwatch;
