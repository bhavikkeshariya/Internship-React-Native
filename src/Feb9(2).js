import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Feb9_2 = () => {
  return (
    //Transform
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Text style={styles.text}>Transforms</Text>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={styles.img}
          />
          <Text style={styles.text1}>Original</Text>
        </View>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={[
              styles.img,
              {
                transform: [{scale: 2}],
              },
            ]}
          />
        </View>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={[
              styles.img,
              {
                transform: [{scaleX: 2}],
              },
            ]}
          />
        </View>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={[
              styles.img,
              {
                transform: [{scaleY: 2}],
              },
            ]}
          />
        </View>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={[
              styles.img,
              {
                transform: [{rotateZ: '45deg'}],
              },
            ]}
          />
        </View>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={[
              styles.img,
              {
                transform: [
                  {rotateZ: '45deg'},
                  {rotateX: '60deg'},
                  {rotateY: '10deg'},
                ],
              },
            ]}
          />
        </View>

        <View style={styles.box}>
          <Image
            source={require('/Users/apple/Desktop/Bhavik/Week_2/AwesomeProject/ImageN.jpg')}
            style={[
              styles.img,
              {
                transform: [{skewY: '45deg'}],
              },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingBottom: 150,
  },
  box: {
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
});
export default Feb9_2;
