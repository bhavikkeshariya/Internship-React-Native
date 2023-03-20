import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#CCF1FF',
  },
  flatListitem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#F0CCC0',
    elevation: 5,
  },
  profileImg: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'black',
  },
  itemStyle: {
    justifyContent: 'space-evenly',
  },
  textName: {
    fontSize: 16,
    color: '#252525',
    fontWeight: '500',
    width: 245,
  },
  textName1: {
    fontSize: 15,
    color: '#252525',
    width: 245,
    fontWeight: '400',
  },
  textName0: {
    fontSize: 18,
    color: '#252525',
    fontWeight: 'bold',
    width: 245,

    textDecorationLine: 'underline',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    marginVertical: 3,
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 10,
  },
});
export default styles;
