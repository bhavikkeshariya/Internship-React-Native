import {StyleSheet} from 'react-native';
import Colors from '../Assets/colors';

const Styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'column',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 40,
  },
  logo: {
    position: 'absolute',
    width: 160,
    height: 41,
    left: 10,
  },
  lock: {
    position: 'absolute',
    width: 41,
    height: 41,
    left: 335,
  },
  banner: {
    width: 400,
    height: 250,
    top: 90,
  },
  banner1: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  view1: {
    width: 350,
    height: 200,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  live1: {
    width: 110,
    height: 60,
  },
  live2: {
    color: Colors.WHITE,
    left: 20,
    bottom: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
  },
  options: {
    width: 400,
    height: '60%',
    top: 100,
    alignItems: 'center',
  },
  option: {
    width: 165,
    height: 165,
    borderWidth: 5,
    borderColor: Colors.RED,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 5,
  },

  imgv: {
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
    backgroundColor: Colors.LT_RED,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 20,
  },
  img: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    margin: 5,
  },
  title1: {
    color: Colors.VIOLET,
    fontSize: 15,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  tag: {
    color: Colors.VIOLET,
    fontSize: 8,
    top: 20,
    left: 11,
  },
  view2: {
    top: 35,
    height: 30,
    backgroundColor: Colors.RED,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
  },
  text1: {
    top: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Styles;
