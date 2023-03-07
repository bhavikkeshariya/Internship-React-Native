import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#00E0C6',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 25,
    color: 'black',
  },
  input: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  inputView: {
    margin: 15,
  },
  button: {
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
  },
  head: {
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 5,
    marginVertical: 2,
  },
  login: {
    alignSelf: 'center',
    margin: 10,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
export default styles;
