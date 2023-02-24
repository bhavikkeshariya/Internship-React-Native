import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {loadQuote} from '../Store/Action';
import styles from './Style';

const Quotes = ({navigation}) => {
  const dispatch = useDispatch();
  const getQuote = useSelector(store => store.one.quote);
  const isLoading = useSelector(store => store.one.isLoading);
  const getCharacter = useSelector(store => store.one.character);
  const getAnime = useSelector(store => store.one.anime);

  const Load = () => dispatch(loadQuote());

  const GoTo = () => {
    navigation.navigate('Sitcom-Quotes');
  };

  console.log('Loading........');
  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.quoteView}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <Text style={styles.quote}>{getQuote}</Text>
            <Text style={styles.character}> ~ {getCharacter}</Text>
            <Text style={styles.anime}> - {getAnime}</Text>
          </>
        )}
      </ScrollView>

      <View style={styles.loadView}>
        <TouchableOpacity style={styles.buttonLoad} onPress={Load}>
          <Text style={styles.loadText}>Load Quote</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loadView}>
        <TouchableOpacity style={styles.buttonLoad} onPress={GoTo}>
          <Text style={styles.loadText}>Go to Sitcom Quotes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quotes;
