import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

const checkboxItem = ({text, onPress}) => {
  const [checked, set_checked] = useState(false);
  const pressed = () => {
    set_checked(!checked);
    onPress(checked);
  };
  return <CheckBox title={text} checked={checked} onPress={pressed} />;
};

export default checkboxItem;
