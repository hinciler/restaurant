import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';
const dummy = require('./dummy.json');
const {leftDummy, orange, green} = dummy;

import {Header, List, LeftOrderButton} from 'components';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  contentContainerStyle: {
    flex: 1,
  },
  right: {
    flex: 5,
  },
});
function OrderList() {
  const {lang} = useSelector((state) => state.translate);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.container}
        data={leftDummy}
        renderItem={({item, index}) => (
          <LeftOrderButton
            containerStyle={styles.leftButtons}
            item={item}
            text={item.text}
            disabled={item.disabled}
          />
        )}
        keyExtractor={(item) => item.pay}
      />
      <List />
      <View style={styles.right} />
    </View>
  );
}

export default OrderList;
