import {StyleSheet} from 'react-native';
import {colors} from 'config';
import {normalize} from 'react-native-elements';
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
  spinnerTextStyle: {
    color: '#FFF',
  },

  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  contentTitle: {
    fontSize: 20,
    marginBottom: normalize(15),
  },
});
