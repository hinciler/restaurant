import {StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background1,
    flex: 1,
  },
  scrollContainer: {
    marginBottom: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalButton: {
    height: normalize(50),
    width: normalize(85),
    flex: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: normalize(5),
    marginRight: normalize(5),
  },
  horizontalButtonActive: {
    height: normalize(50),
    width: normalize(85),
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    marginLeft: normalize(5),
    marginRight: normalize(5),
  },
  verticalButton: {
    height: normalize(50),
    width: normalize(44),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: normalize(5),
    marginRight: normalize(5),
    marginBottom: normalize(5),
  },
  verticalView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
