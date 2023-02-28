import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
  },
  head: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  input: {
    borderColor: '#C95B6C',
    borderWidth: 3,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  buttonView: {
    alignSelf: 'center',
    marginTop: 80,
  },
  button: {
    backgroundColor: '#C95B6C',
    margin: 20,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: 'white',
  },
  add: {
    fontSize: 28,
    paddingHorizontal: 20,
    color: 'white',
  },
});
export default styles;
