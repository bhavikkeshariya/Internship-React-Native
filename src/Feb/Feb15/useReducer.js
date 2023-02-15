import React, {useEffect, useReducer, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const initialState = {
  time: 0,
  isRunning: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return {...state, isRunning: true};
    case 'stop':
      return {...state, isRunning: false};
    case 'reset':
      return {isRunning: false, time: 0};
    case 'tick':
      return {...state, time: state.time + 1};
    default:
      throw new Error();
  }
};

const Feb15_3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {time, isRunning} = state;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (state.isRunning) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  });

  return (
    <View
      style={{
        marginVertical: 35,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 35, fontWeight: 'bold'}}>{state.time}</Text>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 5, marginVertical: 10}}
        onPress={() => dispatch({type: 'start'})}>
        <Text style={{fontSize: 15, color: 'white'}}>start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 5, marginVertical: 10}}
        onPress={() => dispatch({type: 'stop'})}>
        <Text style={{fontSize: 15, color: 'white'}}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 5, marginVertical: 10}}
        onPress={() => dispatch({type: 'reset'})}>
        <Text style={{fontSize: 15, color: 'white'}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb15_3;
