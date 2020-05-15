import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';

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
    marginTop: normalize(40),
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
    height: normalize(20),
    alignItems: 'center',
    marginTop: normalize(5),
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: normalize(20),
  },
  grid: {
    flexDirection: 'column',
    padding: normalize(30),
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: normalize(2),
  },
  numOverlay: {
    height: normalize(50),
    width: normalize(80),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
