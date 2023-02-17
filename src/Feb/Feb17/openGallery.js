import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Feb17_3 = props => {
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const lesGo = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image);
      setUri(image.path);
    });
  };
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          width: 300,
          height: 400,
          alignSelf: 'center',
          marginTop: '15%',
        }}
        {...props}
        source={uri ? {uri} : props.source}
      />
      <TouchableOpacity
        onPress={lesGo}
        style={{
          backgroundColor: 'black',
          alignSelf: 'center',
          marginTop: 500,
          padding: 10,
          position: 'absolute',
        }}>
        <Text style={{color: 'white'}}>Select Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feb17_3;
