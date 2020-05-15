import {StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background1,
  },
  logo: {
    width: normalize(100),
    resizeMode: 'center',
  },
  leftComponent: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
