import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';
import {isTablet} from 'react-native-device-info';
const {width} = Dimensions.get('window');
const PIN_PAD_HEIGHT = 300;
const SLIDING_WIDTH = (4 * width) / 5 - 10;
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
    width: '100%',
    justifyContent: 'center',
    borderRadius: normalize(10),
    padding: normalize(5),
  },
  input: {
    height: normalize(20),
    backgroundColor: colors.white,
    fontSize: normalize(14),
    color: colors.text,
  },
  grid: {
    flexDirection: 'column',
    paddingTop:
      width > 380
        ? normalize(7)
        : (width > 321 ? normalize(5) : normalize(0)) || 10,
  },
  row: {
    flexDirection: 'row',
  },
  numOverlay: {
    height: PIN_PAD_HEIGHT / 6,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginVertical: 2,
    marginRight: 2,
  },

  dragHandler: {
    alignSelf: 'stretch',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
