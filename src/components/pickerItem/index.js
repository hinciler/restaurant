import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Text} from 'components';
import {Icon, Button} from 'react-native-elements';
import ModalSelectList from '../SelectedList';
import {colors} from 'config';
const list = [
  {
    title: 'BTC',
    subtitle: 2205,
    id: 1,
  },
  {
    title: 'ETH',
    subtitle: 1500,
    id: 2,
  },
  {
    title: 'EUR',
    subtitle: 1500,
    id: 3,
  },
  {
    title: 'EUR',
    subtitle: 1500,
    id: 4,
  },
  {
    title: 'EUR',
    subtitle: 1500,
    id: 5,
  },
  {
    title: 'EUR',
    subtitle: 1500,
    id: 6,
  },
];
const PickerItem = ({text, value, onPress}) => {
  const [visible, setVisible] = useState(false);

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
        onPress={() => setVisible(true)}
      />
      <ModalSelectList visible={visible} setVisible={setVisible} list={list} />
    </View>
  );
};

export default PickerItem;
