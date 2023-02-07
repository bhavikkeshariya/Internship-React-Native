import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DATA from '../Constants/titles';
import Styles from './homestyle';

const Compo = ({item}) => (
  <TouchableOpacity style={Styles.option}>
    <View style={Styles.imgv}>
      <Image style={Styles.img} source={item.imagepath}></Image>
    </View>
    <Text style={Styles.title1}>{item.title}</Text>
    <Text style={Styles.tag}>{item.tag}</Text>
    <View style={Styles.view2}>
      <Text style={Styles.text1}>{item.button}</Text>
    </View>
  </TouchableOpacity>
);
function Home() {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.heading}>
        <Image
          style={Styles.logo}
          source={require('../Assets/Images/Logo.png')}
        />
        <TouchableOpacity
          onPress={() => Alert.alert('You pressed the lock button')}>
          <Image
            style={Styles.lock}
            source={require('../Assets/Images/privacy.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.banner}>
        <ImageBackground
          style={Styles.banner1}
          source={require('../Assets/Images/banner1.png')}>
          <View style={Styles.view1}>
            <Image
              style={Styles.live1}
              source={require('../Assets/Images/live.png')}
            />
            <Text style={Styles.live2}>LIVE FOOTBALL TV</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={Styles.options}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Compo item={item} />}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default Home;
