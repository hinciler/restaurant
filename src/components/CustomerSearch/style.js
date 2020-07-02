import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
import {isTablet} from 'react-native-device-info';
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
    flex: 3,
  },

  searchInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: normalize(5),
  },

  searchTextInputStyle: {
    backgroundColor: colors.white,
  },

  tableContainerStyle: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },

  tableHeaderStyle: {
    borderColor: colors.grey0,
    borderWidth: 1,
    padding: normalize(3),
    width: normalize(85),
  },

  rightBtnContainer: {flex: 1},
  scrollHorizontalPortrait: {
    minHeight: normalize(70),
    justifyContent: 'center',
    paddingBottom: normalize(5),
  },

  listBtn: {
    flexGrow: 1,
    flexDirection: !isTablet() ? 'row' : 'column',
    backgroundColor: colors.background1,
  },
});
