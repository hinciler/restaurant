import {StyleSheet} from 'react-native';
import {colors} from 'config';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background1,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
});
