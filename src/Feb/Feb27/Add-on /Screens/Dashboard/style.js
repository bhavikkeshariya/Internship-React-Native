import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  display: {
    margin: 20,
    borderWidth: 3,
    borderColor: 'pink',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  buttonView: {
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: 'pink',
    margin: 20,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: 'white',
  },
  add: {
    fontSize: 55,
    paddingHorizontal: 20,
    color: 'white',
  },
});
export default styles;
