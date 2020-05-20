import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Text} from 'components';
import {colors} from 'config';
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.secondary,
  },
});
import {Typography} from 'components/Text';
const Buttons = ({
  text,
  backgroundColor = colors.error,
  color = colors.active,
  disabled = false,
  onPress,
}) => {
  return (
    <Button
      title={text}
      buttonStyle={[styles.buttonStyle, {backgroundColor}]}
      disabled={disabled}
      onPress={onPress}
    />
  );
};

export default Buttons;
