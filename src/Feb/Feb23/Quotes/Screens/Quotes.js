import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadQuote} from '../Store/Action';
import styles from './Style';

const Quotes = () => {
  const dispatch = useDispatch();
  const getQuote = useSelector(store => store.quote);

  const Load = () => dispatch(loadQuote());
  return (
    <View style={styles.mainView}>
      <View style={styles.quoteView}>
        <Text style={styles.quote}>{getQuote}</Text>
      </View>
      <View style={styles.loadView}>
        <TouchableOpacity style={styles.buttonLoad} onPress={Load}>
          <Text style={styles.loadText}>Load Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quotes;
