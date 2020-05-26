import React, {useState, memo} from 'react';
import {CheckBox} from 'react-native-elements';
import {colors} from 'config';

function CheckBoxItem({text, _key, onPress, isCheck = true}) {
  const [checked, set_checked] = useState(isCheck);
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
export default memo(CheckBoxItem);
