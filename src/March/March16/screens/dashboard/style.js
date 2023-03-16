import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#00E0C6',
  },
  item: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    width: '45%',
  },
  itemTxt: {
    fontSize: 10,
    paddingVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    margin: 15,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonTxt: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 45,
    alignSelf: 'center',
  },
});
export default styles;
