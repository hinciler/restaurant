import React from 'react';
import {CheckBox} from 'react-native-elements';
import {colors} from 'config';

export default function ({text, index, onPress, selectedIndex}) {
  const pressed = () => {
    const data = {index};
    onPress(data);
  };

  return (
    <CheckBox
      title={text}
      checked={index === selectedIndex}
      onPress={pressed}
      checkedColor={colors.red}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
    />
  );
}
