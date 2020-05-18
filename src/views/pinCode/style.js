import {StyleSheet} from 'react-native';
import {colors} from 'config';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  container_portrait: {
    flex: 1,
  },
  container_landscape: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,

    backgroundColor: colors.background1,
  },
});
