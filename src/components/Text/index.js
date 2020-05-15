import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';
const TextField = ({
  type = 'PL',
  text,
  textAlign = 'left',
  numberOfLines,
  color,
  style,
  onPress,
}) => {
  return (
    <Text
      testID="Text"
      onPress={onPress ? onPress : null}
      style={[
        styles.all,
        styles[type],
        {textAlign, color: color ? color : styles[type].color},
        style,
      ]}
      numberOfLines={numberOfLines || null}>
      {text}
    </Text>
  );
};

export default TextField;

export const Typography = {
  H1: 'H1',
  H2: 'H2',
  H3B: 'H3B',
  H3: 'H3',
  H4: 'H4',
  H4NB: 'H4NB',
  H5B: 'H5B',
  H5R: 'H5R',
  PH: 'PH',
  PLB: 'PLB',
  PL: 'PL',
  PLC: 'PLC',
  PMB: 'PMB',
  PM: 'PM',
  PMC: 'PMC',
  PMM: 'PMM',
  PR: 'PR',
  PSB: 'PSB',
  PS: 'PS',
  PSS: 'PSS',
  PSM: 'PSM',
};
