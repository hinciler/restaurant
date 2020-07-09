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
    justifyContent: 'space-around',
  },
  inputContainer: {
    borderColor: colors.border2,
    borderWidth: normalize(2),
    height: normalize(40),
    backgroundColor: colors.white,
    marginLeft: normalize(30),
    marginRight: normalize(30),
    marginTop:
      width > 680
        ? normalize(40)
        : (width > 321 ? normalize(10) : normalize(5)) || 10,
    justifyContent: 'center',
  },
  input: {
    height: normalize(35),
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
  },
  grid: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: isTablet() ? normalize(6) : normalize(4),
  },
  numOverlay: {
    height: isTablet() ? normalize(60) : normalize(50),
    width: isTablet() ? normalize(90) : normalize(80),
    borderColor: colors.border,
    borderWidth: 1,
    marginRight: isTablet() ? normalize(6) : normalize(4),
    marginLeft: isTablet() ? normalize(6) : normalize(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bottomBtn: {
    marginTop:
      width > 380
        ? normalize(30)
        : (width > 321 ? normalize(20) : normalize(5)) || 30,
  },
});
