import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Feb2 = () => {
  const [setLoading, setsetLoading] = useState(false);
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.view1}>
        <Text style={styles.text}>Welcome to</Text>
        <Image
          style={styles.image}
          source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/img/cs-logo.png')}
        />
      </View>
      <View style={styles.view2}>
        {/* <ImageBackground
          source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/img/pexels-photo-799443.jpeg')}
          style={styles.bgimage}
        /> */}
        <ActivityIndicator size="large" color="white" animating={setLoading} />
        <Button
          title="Press me"
          onPress={() => {
            setsetLoading(!setLoading),
              Alert.alert('You want to stop Activity Indicator');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  // bgimage: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   resizeMode: 'cover',
  // },
  view1: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
  },
  image: {
    height: 50,
    width: 95,
  },
  view2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default Feb2;
