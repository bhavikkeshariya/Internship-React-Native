import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  watch: {
    color: 'pink',
    marginTop: '20%',
    fontSize: 100,
    fontWeight: 'bold',
  },
  midView: {
    marginTop: '30%',
    flexDirection: 'row',
  },
  button: {
    padding: 25,
    marginHorizontal: 35,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default styles;
