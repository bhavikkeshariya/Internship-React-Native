import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

const OTP = ({navigation, route}) => {
  const [confirm, setConfirm] = useState('');
  const [code, setCode] = useState('');

  const temp = route.params.confirmation;
  console.log(temp._verificationId);
  const goTo = async () => {
    try {
      await confirm.confirm(code);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log(error);
      alert('Invalid code');
    }
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Enter the OTP</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="..."
          value={code}
          onChangeText={newNum => setCode(newNum)}
          placeholderTextColor="black"
          style={styles.input}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => goTo()}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTP;
