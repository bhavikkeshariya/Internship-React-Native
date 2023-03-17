import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#00E0C6',
  },
  item: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    width: '95%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  itemTxt: {
    fontSize: 14,
    paddingVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 45,
    alignSelf: 'flex-start',
    margin: 10,
  },
});
export default styles;
