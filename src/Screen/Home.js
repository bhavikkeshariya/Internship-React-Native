import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DATA from '../Constants/Titles';
import styles from './homestyle';

function Home() {
  const [DATA2, setDATA2] = useState(DATA);
  const renderActive = index => {
    let tempDATA = JSON.parse(JSON.stringify(DATA2));
    tempDATA[index].isActive = !tempDATA[index].isActive;
    tempDATA[index].isActive == true
      ? (tempDATA[index].head = 'AD')
      : (tempDATA[index].head = 'Live');
    setDATA2(tempDATA);
    //Delete Component
    // let newDATA = tempDATA.filter(item => item.isActive !== true);
    // setDATA2(newDATA);
  };

  const Compo = ({item, index}) => {
    return (
      <TouchableOpacity
        style={item.isActive ? styles.option0 : styles.option}
        onPress={() => renderActive(index)}>
        <View style={styles.viewMain}>
          <TouchableOpacity
            style={styles.viewLive}
            onPress={() => renderActive(index)}>
            <Text style={styles.live3}>{item.head}</Text>
          </TouchableOpacity>
          <View style={item.isActive ? styles.imgv0 : styles.imgv}>
            <Image style={styles.img} source={item.imagepath}></Image>
          </View>
        </View>
        <Text style={styles.title1}>{item.title}</Text>
        <Text style={styles.tag}>{item.tag}</Text>
        <View style={item.isActive ? styles.view0 : styles.view2}>
          <Text style={item.isActive ? styles.text0 : styles.text1}>
            {item.button}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.heading}>
        <Image
          style={styles.logo}
          source={require('../Assets/Images/Logo.png')}
        />
        <TouchableOpacity
          onPress={() => Alert.alert('You pressed the lock button')}>
          <Image
            style={styles.lock}
            source={require('../Assets/Images/privacy.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <ImageBackground
          style={styles.banner1}
          source={require('../Assets/Images/banner1.png')}>
          <View style={styles.view1}>
            <Image
              style={styles.live1}
              source={require('../Assets/Images/live.png')}
            />
            <Text style={styles.live2}>LIVE FOOTBALL TV</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.options}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA2}
          numColumns={2}
          renderItem={Compo}
        />
      </View>
    </View>
  );
}

export default Home;
