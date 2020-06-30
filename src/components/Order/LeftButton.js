import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, normalize} from 'react-native-elements';

export default function ({text, disabled = false, onPress}) {
  return (
    <Button
      title={text}
      type="clear"
      disabled={disabled}
      titleStyle={styles.button}
      onPress={onPress}
      containerStyle={styles.buttonContainer}
    />
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    margin: normalize(5),
    padding: normalize(5),
    height: normalize(50),
    justifyContent: 'center',
  },
  button: {
    color: '#000',
    fontSize: normalize(10),
  },
});
