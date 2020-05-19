import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default function () {
  const [checked, setValue] = useState(true);
  const [checked2, setValue2] = useState(false);
  var radio_props = [
    {label: 'Evet', value: 0},
    {label: 'Hayir', value: 1},
  ];
  return (
    <View>
      <CheckBox title="Click Here" checked={checked} />
      <CheckBox center title="Click Here" checked={checked2} />

      <CheckBox
        center
        title="Click Here"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => setValue2(!checked2)}
        checked={checked2}
      />

      <CheckBox
        center
        title="Click Here to Remove This Item"
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={checked}
      />
    </View>
  );
}
