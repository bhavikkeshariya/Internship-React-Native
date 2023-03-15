import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const Login = ({navigation}) => {
  GoogleSignin.configure({
    webClientId:
      '105722745642-a80ogbdoqbavn9nf877nrs0fkvqtu6ph.apps.googleusercontent.com',
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('hello');
      const userInfo = await GoogleSignin.signIn();
      console.log('Success:', userInfo);
    } catch (error) {
      console.log(JSON.parse(JSON.stringify(error)));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.mainView}>
      <Text> Login with Google </Text>
      <GoogleSigninButton
        style={styles.google}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />
    </View>
  );
};

export default Login;
