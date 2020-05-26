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
  modalcontainer: {
    justifyContent: 'flex-end',
  },
  flatListContainer: {
    borderRadius: 10,
    backgroundColor: 'green',
    bottom: 0,
  },
  headerContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderColor: 'red',
  },
  contentWrapper: {
    backgroundColor: 'white',
    borderRadius: normalize(10),
    paddingTop: normalize(10),
  },
});
const checklist = [];
export default function ({
  visible = false,
  setVisible,
  list,
  headerText = 'SambaPOS',
  onSave,
  type,
}) {
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
      style={styles.modalcontainer}
      useNativeDriver={true}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={{
          icon: 'close',
          color: '#fff',
          size: normalize(24),
          onPress: () => setVisible(false),
        }}
        centerComponent={<Text text={headerText} color={colors.white} />}
      />
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
          keyExtractor={(item) => item.id}
        />
        <Button
          text={'KAYDET'}
          onPress={() => onSave(type === 'check' ? checklist : selectIndex)}
        />
      </View>
    </Modal>
  );
}
