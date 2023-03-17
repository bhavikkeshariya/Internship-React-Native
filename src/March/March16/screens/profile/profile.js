import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

const Profile = ({route}) => {
  const userDetails = route.params.data;
  console.log(userDetails);
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.img}
        source={{
          uri: `http://krdagujarat.in/uploads/user_thumb/${userDetails.data.image}`,
        }}
      />
      <Text style={styles.txt}>
        Name : {userDetails.data.first_name} {userDetails.data.last_name}
      </Text>
      <Text style={styles.txt}>Email : {userDetails.data.email}</Text>
      <Text style={styles.txt}>Category : {userDetails.data.category}</Text>
    </View>
  );
};

export default Profile;
