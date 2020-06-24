import React, {useState, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {View, StyleSheet, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import CheckBox from './checkboxItem';
import RadioItem from './radioItem';
import Button from '../Button';
import {normalize} from 'react-native-elements';
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
  },

  contentWrapper: {
    borderTopLeftRadius: normalize(10),

    marginTop: 80,
  },
});
const checklist = [];
const CustomModal = memo(
  ({
    visible = false,
    setVisible,
    list,
    onSave,
    type,
    textKey = 'title',
    selectedIndex = 0,
  }) => {
    const {lang} = useSelector((state) => state.translate);
    const [selectIndex, selectRadio] = useState(selectedIndex);
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
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) =>
              type === 'check' ? (
                <CheckBox
                  text={item[textKey]}
                  onPress={checked}
                  _key={item.Id}
                />
              ) : (
                <RadioItem
                  text={item[textKey]}
                  onPress={(data) => selectRadio(data.index)}
                  index={index}
                  selectedIndex={selectIndex}
                />
              )
            }
            keyExtractor={(item) => item.Id}
          />
          <Button
            text={lang.save}
            onPress={() => onSave(type === 'check' ? checklist : selectIndex)}
          />
        </View>
      </Modal>
    );
  },
);
export default CustomModal;
