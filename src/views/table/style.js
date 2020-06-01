import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background1,
    flex: 1,
  },
  scrollHorizontal: {
    flex: 0.1,
    marginBottom: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalButton: {
    height: normalize(50),
    width: width / 2 - 15,
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: normalize(5),
    marginRight: normalize(5),
  },
  verticalButton: {
    height: normalize(50),
    width: width > 600 ? normalize(85) : width / 3 - 15,
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
