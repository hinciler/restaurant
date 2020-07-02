import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, normalize} from 'react-native-elements';

export default function ({text, disabled = false}) {
  return (
    <Button
      title={text}
      type="clear"
      raised
      disabled={disabled}
      titleStyle={styles.button}
      containerStyle={styles.buttonContainer}
    />
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    minHeight: normalize(50),
    margin: normalize(5),
    paddingHorizontal: normalize(5),
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    color: '#000',
    fontSize: normalize(10),
  },
});
