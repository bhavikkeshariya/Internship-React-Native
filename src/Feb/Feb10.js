import React, {useEffect} from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  Button,
  Easing,
  Linking,
  PermissionsAndroid,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const Feb10 = () => {
  //Easing
  let fadeAnim = new Animated.Value(0);

  const animate = easing => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      easing,
      useNativeDriver: false,
    }).start();
  };

  const box = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const animatedStyles = [
    styles.box1,
    {
      fadeAnim,
      width: box,
      height: box,
    },
  ];
  //Back Handler
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Are you sure?', 'You want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  //PermissionsAndroid
  const requestCameraPermission = async () => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  //Toast
  const notify = () => {
    ToastAndroid.showWithGravity(
      'CONGRATULATIONS',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar hidden={true} />
      <View style={styles.view}>
        <Animated.View style={animatedStyles} />
      </View>
      <SectionList
        sections={LIST}
        style={styles.list}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => animate(item.easing)}
            style={styles.listRow}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
      {/*LINKING*/}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://reactnative.dev/docs/next/linking')
        }
        style={styles.linking}>
        <Text>Linking</Text>
      </TouchableOpacity>

      {/*PERMISSIONS*/}
      <TouchableOpacity
        onPress={requestCameraPermission}
        style={styles.linking}>
        <Text>Permissions</Text>
      </TouchableOpacity>

      {/*TOAST*/}
      <Button title="Toast" onPress={notify} />
    </View>
  );
};

const LIST = [
  {
    title: 'Predefined Animation',
    data: [
      {title: 'back', easing: Easing.back(2)},
      {title: 'bounce', easing: Easing.bounce},
      {title: 'ease', easing: Easing.ease},
      {title: 'elastic', easing: Easing.elastic(5)},
    ],
  },
  {
    title: 'Standard Functions',
    data: [
      {title: 'linear', easing: Easing.linear},
      {title: 'quad', easing: Easing.quad},
      {title: 'cubic', easing: Easing.cubic},
    ],
  },
  {
    title: 'Additional Functions',
    data: [
      {title: 'bezier', easing: Easing.bezier(0, -2, 1, 1)},
      {title: 'circle', easing: Easing.circle},
      {title: 'sin', easing: Easing.sin},
      {title: 'exp', easing: Easing.exp},
    ],
  },
  {
    title: 'Combinations',
    data: [
      {title: 'in + elastic', easing: Easing.in(Easing.elastic(-2))},
      {title: 'out + back', easing: Easing.out(Easing.back(2))},
      {title: 'inOut + bounce', easing: Easing.inOut(Easing.bounce)},
    ],
  },
  {
    title: 'Extra',
    data: [
      {title: 'step0', easing: Easing.step0},
      {title: 'step1', easing: Easing.step1},
      {title: 'poly', easing: Easing.poly(5)},
    ],
  },
];

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#20232a',
  },
  view: {
    height: 180,
    alignItems: 'center',
  },
  box1: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: '#61dafb',
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f4f4f4',
    color: '#999',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  list: {
    backgroundColor: '#fff',
  },
  listRow: {
    padding: 8,
  },
  linking: {
    backgroundColor: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Feb10;
