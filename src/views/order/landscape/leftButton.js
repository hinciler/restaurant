import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default function ({text, disabled = false}) {
  return (
    <Button
      title={text}
      type="clear"
      disabled={disabled}
      titleStyle={styles.button}
      containerStyle={styles.buttonContainer}
    />
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
  },
  button: {
    color: '#000',
  },
});
