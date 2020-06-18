import {StyleSheet} from 'react-native';
import {colors} from 'config';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },

  orderButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 60,
    justifyContent: 'center',
  },
  numberButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    width: 95,
    justifyContent: 'center',
  },
  addOrderButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffa502',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 60,
    justifyContent: 'center',
  },

  addFoodButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#008000',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    width: 95,
    justifyContent: 'center',
  },
  orderText: {
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
