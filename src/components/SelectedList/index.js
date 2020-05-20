import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import CheckBox from './checkboxItem';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
const index = ({visible = false, setVisible, list}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      animationOut="fadeOutDown"
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}>
      <FlatList
        data={list}
        contentContainerStyle={{
          justifyContent: 'flex-end',
          backgroundColor: 'white',
          borderRadius: 10,
        }}
        renderItem={({item}) => (
          <CheckBox text={item.title} onPress={(value) => console.log(value)} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<Button title="Solid Button" />}
      />
    </Modal>
  );
};

export default index;
