import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import React from 'react';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
  },

  green: {
    flex: 1,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  containerStyle: {
    padding: 10,
    backgroundColor: 'green',
    margin: '1%',
    flexGrow: 1,
    width: '30%',
  },

  buttonStyle: {backgroundColor: 'green'},

  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
