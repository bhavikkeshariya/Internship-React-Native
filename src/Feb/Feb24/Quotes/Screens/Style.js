import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  quoteView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
  },
  quote: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    margin: 10,
  },
  loadView: {
    alignItems: 'center',
  },
  buttonLoad: {
    marginVertical: 25,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  loadText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  character: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
  anime: {
    fontSize: 14,
    color: 'black',
  },
});
export default styles;
