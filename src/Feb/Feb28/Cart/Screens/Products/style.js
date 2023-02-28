import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  products: {
    marginVertical: 25,
    borderWidth: 5,
    borderColor: 'black',
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#39888D',
  },
  head: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  priceView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#544308',
  },
  valueMrp: {
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 15,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'double',
  },
  valueDs: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 25,
  },
  cart: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  cartButton: {
    padding: 25,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#39888D',
    marginHorizontal: 15,
    marginVertical: 25,
  },
});
export default styles;
