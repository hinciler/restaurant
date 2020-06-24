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
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  searchLeftContainer: {flex: 0.9, margin: 10, alignItems: 'flex-start'},

  searchInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.1,
  },

  searchTextStyle: {flex: 0.08},

  searchTextInputStyle: {
    height: normalize(25),
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
  },

  tableHeaderStyle: {
    borderColor: colors.grey0,
    borderWidth: 1,
    padding: normalize(3),
    width: normalize(85),
  },
});
