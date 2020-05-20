import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {colors} from 'config';

export default function ({text, _key, onPress}) {
  const [checked, set_checked] = useState(false);
  const pressed = () => {
    const data = {checked: !checked, text, _key};
    set_checked(!checked);
    onPress(data);
  };
  return (
    <CheckBox
      title={text}
      checked={checked}
      onPress={pressed}
      checkedColor={colors.red}
    />
  );
}
