import {StyleSheet} from 'react-native';
const Barheight = 67;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: Barheight,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: Barheight,
    width: 150,
    resizeMode: 'center',
  },
  header_right: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'aqua',
    flexDirection: 'row',
  },
  leftBtnWrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  rightBtnWrapper: {
    flex: 4,
    backgroundColor: 'aqua',
    flexDirection: 'row',
  },
  textArea: {
    flex: 3,
  },
  textAreaWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  textAreaButtons: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#f5f5f5',
  },
  orange: {
    flex: 1,
    backgroundColor: 'white',
  },
  green: {
    flex: 3,
    backgroundColor: 'white',
  },
});
