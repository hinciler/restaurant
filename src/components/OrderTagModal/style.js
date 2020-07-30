import {Dimensions, StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 2,
    flex: 1,
    marginTop: 20,
  },
  portionContainer: {padding: 5, paddingLeft: 10},
  radioBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioItem: {width: '30%', margin: 0, marginRight: -5},
  orderGroupTag: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 9,
  },
  orderTagList: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: 'white',
  },
  badgeStyle: {
    backgroundColor: 'green',
    width: normalize(20),
    height: normalize(15),
    marginRight: normalize(5),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  radioTxtStyle: {
    fontSize: width > 380 ? normalize(11) : normalize(10),
  },
  rowFront: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    height: 50,
  },
  backTextWhite: {
    color: '#FFF',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  wrapButton: {
    height: width > 380 ? normalize(30) : normalize(28),
    width: width > 380 ? normalize(90) : normalize(87),
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prefixBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: normalize(3),
  },
});
