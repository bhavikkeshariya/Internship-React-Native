import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {loadQ} from '../Store/Action';
import styles from './Style';

const SitcomQuotes = () => {
  const dispatch = useDispatch();
  const getQuote = useSelector(store => store.two.quote);
  const isLoading = useSelector(store => store.two.isLoading);

  const Load = () => dispatch(loadQ());
  console.log('Loading........');
  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.quoteView}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <Text style={styles.quote}>{getQuote}</Text>
          </>
        )}
      </ScrollView>

      <View style={styles.loadView}>
        <TouchableOpacity style={styles.buttonLoad} onPress={Load}>
          <Text style={styles.loadText}>Load Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SitcomQuotes;
