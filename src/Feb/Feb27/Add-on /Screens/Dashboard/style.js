import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  display: {
    margin: 20,
    borderWidth: 3,
    borderColor: '#C95B6C',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  buttonView: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  button: {
    backgroundColor: '#C95B6C',
    margin: 25,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: 'pink',
  },
  add: {
    fontSize: 50,
    paddingHorizontal: 20,
    color: 'white',
  },
});
export default styles;
