import React from 'react';
import {CheckBox} from 'react-native-elements';
import {colors} from 'config';

export default function ({
  text,
  index,
  onPress,
  selectedIndex,
  style,
  checkedColor,
  textStyle,
}) {
  const pressed = () => {
    const data = {index};
    onPress(data);
  };
  return (
    <CheckBox
      title={text}
      checked={index === selectedIndex}
      onPress={pressed}
      checkedColor={checkedColor ? undefined : colors.red}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      containerStyle={style}
      textStyle={textStyle}
    />
  );
}
