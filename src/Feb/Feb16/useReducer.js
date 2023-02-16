import React, {useEffect, useReducer} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {isRunning: true, time: state.time + 1};
    case 'STOP':
      return {isRunning: false};
    case 'RESET':
      return {isRunning: false, time: 0};
    default:
      return;
  }
};

const Feb16_1 = () => {
  const [state, dispatch] = useReducer(reducer, {isRunning: false, time: 0});

  useEffect;
  return (
    <View
      style={{
        marginVertical: 35,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 35, fontWeight: 'bold'}}>
        {state.time} Seconds
      </Text>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 5, marginVertical: 10}}
        onPress={() => dispatch({type: 'START'})}>
        <Text style={{fontSize: 25, color: 'white'}}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 5, marginVertical: 10}}
        onPress={() => dispatch({type: 'STOP'})}>
        <Text style={{fontSize: 25, color: 'white'}}>STOP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 5, marginVertical: 10}}
        onPress={() => dispatch({type: 'RESET'})}>
        <Text style={{fontSize: 25, color: 'white'}}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb16_1;
