import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#00E0C6',
    justifyContent: 'flex-end',
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
  item: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  itemTxt: {
    fontSize: 15,
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
});
export default styles;
