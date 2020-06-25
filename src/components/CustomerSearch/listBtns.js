import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {styles} from './style';
import RightButton from './rightButton';
const dummy = require('./dummy.json');
const {rightDummy} = dummy;

export default function () {
  return (
    <FlatList
      contentContainerStyle={styles.listBtn}
      data={rightDummy}
      renderItem={({item, index}) => (
        <RightButton
          containerStyle={styles.leftButtons}
          item={item}
          text={item.text}
          disabled={item.disabled}
        />
      )}
      keyExtractor={(item) => item.pay}
    />
  );
}
