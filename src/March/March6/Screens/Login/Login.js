import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import styles from './style';

const Login = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '',
    });
  }, []);

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

  const signInFB = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return (
      auth().signInWithCredential(facebookCredential),
      console.log(facebookCredential),
      navigation.navigate('Dashboard')
    );
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
      <Button
        title="Facebook Sign-In"
        onPress={() =>
          signInFB().then(() => console.log('Signed in with Facebook!'))
        }
      />
    </View>
  );
};

export default Login;
