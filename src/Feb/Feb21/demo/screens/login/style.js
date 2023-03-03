import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    margin: 25,
  },
  mainText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
    alignSelf: 'center',
  },
  inputTextHead: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  viewMid: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  textIn: {
    paddingHorizontal: 10,
    flex: 1,
  },
  touch: {
    alignSelf: 'center',
  },
  img: {
    width: 25,
    height: 30,
    marginHorizontal: 10,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    alignSelf: 'center',
    padding: 10,
  },
  register: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
  },
});
export default styles;
