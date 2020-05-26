import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import CheckBox from './checkboxItem';
import RadioItem from './radioItem';
import Button from '../Button';
import Text from '../Text';
import {colors} from 'config';
import {Header, normalize} from 'react-native-elements';
import _ from 'lodash';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flatListContainer: {
    borderTopLeftRadius: normalize(10),
    borderTopRightRadius: normalize(10),
    bottom: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    paddingTop: normalize(20),
    flexGrow: 1,
    marginTop: 80,
  },

  contentWrapper: {
    borderTopLeftRadius: normalize(10),
  },
});
const checklist = [];
export default function ({visible = false, setVisible, list, onSave, type}) {
  const [selectIndex, selectRadio] = useState(0);
  const checked = (data) => {
    const _index = _.findIndex(checklist, ['_key', data._key]);
    if (_index === -1) {
      checklist.push(data);
    } else {
      _.pullAt(checklist, [_index]);
    }
  };
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      animationOut="fadeOutDown"
      hideModalContentWhileAnimating={true}
      style={styles.modalContainer}
      useNativeDriver={true}>
      <View style={styles.contentWrapper}>
        <FlatList
          data={list}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({item, index}) =>
            type === 'check' ? (
              <CheckBox text={item.Name} onPress={checked} _key={item.Id} />
            ) : (
              <RadioItem
                text={item.Name}
                onPress={(data) => selectRadio(data.index)}
                index={index}
                selectedIndex={selectIndex}
              />
            )
          }
          keyExtractor={(item) => {
            console.log('item', item);
            return item.Id;
          }}
        />
        <Button
          text={'KAYDET'}
          onPress={() => onSave(type === 'check' ? checklist : selectIndex)}
        />
      </View>
    </Modal>
  );
}
