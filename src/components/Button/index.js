import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {Text} from 'components';
import {colors} from 'config';
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.secondary,
  },
  titleStyle: {
    fontFamily: 'Roboto-Medium',
  },
});
import {Typography} from 'components/Text';
const Buttons = ({
  text,
  icon,
  backgroundColor = colors.error,
  color = colors.black,
  disabled = false,
  onPress,
  loading = false,
  style,
}) => {
  return (
    <Button
      title={text}
      icon={icon}
      buttonStyle={[styles.buttonStyle, {backgroundColor}, style]}
      disabled={disabled}
      onPress={onPress}
      loading={loading}
      titleStyle={[styles.titleStyle, {color}]}
      raised
    />
  );
};

export default Buttons;
