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
});
export default styles;
