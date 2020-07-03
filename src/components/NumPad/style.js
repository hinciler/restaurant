import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  inputContainer: {
    borderColor: colors.grey,
    borderWidth: normalize(1),
    height: normalize(30),
    backgroundColor: colors.white,
    marginTop: normalize(5),
    marginRight: normalize(5),
    justifyContent: 'center',
  },
  input: {
    height: normalize(20),
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: normalize(14),
    color: colors.text,
  },
  grid: {
    flexDirection: 'column',
    paddingTop:
      width > 380
        ? normalize(15)
        : (width > 321 ? normalize(5) : normalize(0)) || 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: normalize(1),
  },
  numOverlay: {
    height: normalize(40),
    width: normalize(60),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
