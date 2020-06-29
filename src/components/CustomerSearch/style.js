import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
import {isTablet} from 'react-native-device-info';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  searchLeftContainer: {
    flex: isTablet() ? 0.9 : 1,
    margin: 10,
    alignItems: 'flex-start',
  },

  searchInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: normalize(5),
    flex: 0.1,
  },

  searchTextInputStyle: {
    height: normalize(25),
    padding: 3,
    borderColor: colors.grey0,
    borderWidth: 1,
    flex: 0.94,
    backgroundColor: colors.white,
  },

  searchBtnStyle: {
    paddingBottom: normalize(2.5),
    paddingTop: normalize(2.5),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey0,
  },

  searchBtnTextStyle: {color: colors.black, fontWeight: 'bold'},

  tableContainerStyle: {
    flexGrow: 1,
    backgroundColor: colors.white,
    borderColor: colors.grey0,
    borderWidth: 1,
    height: normalize(250),
  },

  searchTextStyle: {flex: isTablet() ? 0.08 : 0.18},

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
