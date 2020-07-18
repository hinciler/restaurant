import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
import {isTablet} from 'react-native-device-info';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background1,
    flex: 1,
  },
  scrollHorizontal: {
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: normalize(10),
  },
  horizontalButton: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(10),
    marginHorizontal: normalize(2),
  },
  verticalButton: {
    height: height / 8 - 10,
    width: width > 600 ? normalize(95) : width / 3 - 15,
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
    justifyContent: 'center',
  },
  inputContainerStyle: {
    backgroundColor: '#F2F3F5',
  },
  searchTextInputStyle: {
    padding: normalize(10),
  },
  horizontalScrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
