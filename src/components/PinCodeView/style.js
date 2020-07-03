import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';
import {isTablet} from 'react-native-device-info';
const {width, height} = Dimensions.get('window');
const flexSize =
  width > 380
    ? normalize(20)
    : (width > 321 ? normalize(14) : normalize(1)) || 20;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  inputContainer: {
    borderColor: colors.border2,
    borderWidth: normalize(2),
    height: normalize(50),
    backgroundColor: colors.white,
    marginTop:
      width > 380
        ? normalize(40)
        : (width > 321 ? normalize(30) : normalize(5)) || 40,
    marginLeft: normalize(30),
    marginRight: normalize(30),
    justifyContent: 'center',
  },
  input: {
    height: normalize(40),
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: normalize(14),
    color: colors.text,
  },
  demoInfo: {
    height: flexSize,
    alignItems: 'center',
    marginTop: normalize(5),
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: flexSize,
  },
  grid: {
    flexDirection: 'column',
    padding:
      width > 380
        ? normalize(30)
        : (width > 321 ? normalize(20) : normalize(15)) || 30,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: normalize(2),
  },
  numOverlay: {
    height: isTablet() ? normalize(60) : normalize(50),
    width: isTablet() ? normalize(90) : normalize(80),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  errorWrapper: {
    paddingTop: normalize(5),
  },
  bottomBtn: {
    marginTop:
      width > 380
        ? normalize(30)
        : (width > 321 ? normalize(20) : normalize(5)) || 30,
  },
});
