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
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  textIn: {
    alignSelf: 'flex-start',
    width: '80%',
  },
  touch: {
    alignSelf: 'center',
  },
  img: {
    alignSelf: 'flex-end',
    width: 25,
    height: 30,
    margin: 10,
    right: 15,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
});
export default styles;
