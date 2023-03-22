import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  junction: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 0.33,
    justifyContent: 'flex-end',
  },
  middle: {
    flex: 0.33,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 0.33,
  },
  signalOne: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signalTwo: {

    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signalThree: {

    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  signalFour: {

    width: '20%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 50,
  },
});
export default styles;
