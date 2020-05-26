import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Text} from 'components';
import {Icon, Button} from 'react-native-elements';
import ModalSelectList from '../SelectedList';
import {colors} from 'config';

const PickerItem = ({item, options}) => {
  const [visible, setVisible] = useState(false);

  const textKey = options ? 'tr' : 'Name';
  const [_value, setValue] = useState(item.value);
  console.log('item', item);
  const onSave = (data) => {
    if (item.type === 'radio') {
      setValue(item.list[data][textKey]);
    } else {
      console.log('data', data);
      if (data.length > 0) {
        let _values = '';
        data.map((check, index) => {
          _values += index === 0 ? check.text : ', ' + check.text;
        });

        setValue(_values);
      } else {
        setValue('Seciniz');
      }
    }
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text text={item.text} type="PSM" />
      </View>
      <Button
        containerStyle={styles.valueWrapper}
        buttonStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
        icon={<Icon name="arrow-drop-down" size={24} color={colors.text} />}
        iconRight
        title={_value}
        onPress={() => setVisible(true)}
      />
      <ModalSelectList
        visible={visible}
        setVisible={setVisible}
        list={options ? options : item.list}
        textKey={textKey}
        onSave={onSave}
        type={item.type}
        headerText={item.text}
      />
    </View>
  );
};

export default PickerItem;
