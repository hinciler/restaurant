import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from 'config';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },

  buttonStyle: {
    backgroundColor: colors.secondary,
  },
  content: {
    paddingHorizontal: normalize(5),
  },

  options: {
    flex: 1,
  },
  btngroup: {
    height: normalize(50),
    borderWidth: 0,
    flexDirection: 'row',

    alignItems: 'center',
  },
  btn: {
    textAlign: 'center',
    color: colors.text,
    fontSize: normalize(10),
  },
  btn_container: {
    flex: 1,
  },
  active: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  scroll: {
    padding: normalize(10),
  },
});
