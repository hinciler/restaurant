import React, {useState, memo} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Text} from 'components';
import {Icon, Button} from 'react-native-elements';
import ModalSelectList from '../SelectedList';
import {colors} from 'config';

const PickerItem = memo(({item, options, selectedIndex = 0, onSelect}) => {
  const [visible, setVisible] = useState(false);
  const textKey = 'title';
  const [_value, setValue] = useState(item.value);

  const onSave = (index) => {
    onSelect(options[index]);
    setValue(options[index].title);
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text text={item.title} type="PSM" />
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
        selectedIndex={selectedIndex}
      />
    </View>
  );
});

export default PickerItem;
