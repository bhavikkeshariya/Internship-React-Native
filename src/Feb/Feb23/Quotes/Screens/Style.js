import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  quoteView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quote: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  loadView: {
    alignItems: 'center',
  },
  buttonLoad: {
    marginVertical: 25,
  },
  loadText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default styles;
