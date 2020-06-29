import {StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background1,
  },
  logo: {
    width: 100,
    height: 20,
  },
  header_right: {
    justifyContent: 'center',
  },
});
