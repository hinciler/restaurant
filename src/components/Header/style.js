import {StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background1,
  },
  logo: {
    width: 150,
    resizeMode: 'center',
  },
  header_right: {
    justifyContent: 'center',
  },
});
