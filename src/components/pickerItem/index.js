import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Text} from 'components';
import {Icon, Button} from 'react-native-elements';
import {colors} from 'config';
const PickerItem = ({text, value, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text text={text} type="PSM" />
      </View>
      <Button
        containerStyle={styles.valueWrapper}
        buttonStyle={styles.btnStyle}
        icon={<Icon name="arrow-drop-down" size={24} color={colors.text} />}
        iconRight
        title={<Text text={value} type="PS" />}
        onPress={onPress}
      />
    </View>
  );
};

export default PickerItem;
