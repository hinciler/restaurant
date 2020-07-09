import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';
import {isTablet} from 'react-native-device-info';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 3,
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
        ? normalize(7)
        : (width > 321 ? normalize(5) : normalize(0)) || 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: isTablet() ? normalize(4) : normalize(1),
  },
  numOverlay: {
    height: isTablet() ? normalize(45) : normalize(40),
    width: isTablet() ? normalize(85) : normalize(65),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
