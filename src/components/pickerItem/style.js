import {StyleSheet, View} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(2),
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  valueWrapper: {
    flex: 1,
    padding: normalize(3),
    backgroundColor: 'transparent',
  },
  btnStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: colors.text,
    fontSize: normalize(10),
  },
});
