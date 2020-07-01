import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
import {isTablet} from 'react-native-device-info';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background1,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  searchLeftContainer: {
    flex: isTablet() ? 0.9 : 1,
    margin: 10,
    alignItems: 'center',
  },

  searchInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: normalize(5),
    flex: 0.1,
  },

  searchTextInputStyle: {
    backgroundColor: colors.white,
    marginBottom: 10,
    width: width,
  },

  tableContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    width: width,
  },

  tableHeaderStyle: {
    borderColor: colors.grey0,
    borderWidth: 1,
    padding: normalize(3),
    width: normalize(85),
  },

  rightBtnContainer: {flex: isTablet() ? 0.1 : 0.27},

  scrollHorizontalPortrait: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listBtn: {flex: 1, flexDirection: !isTablet() ? 'row' : 'column'},
});
