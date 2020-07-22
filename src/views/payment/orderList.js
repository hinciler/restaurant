import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Text} from 'components';
import {Typography} from 'components/Text';
import {ListItem} from 'react-native-elements';
import {colors} from 'config';
const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    pay: 10,
    id: '1',
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
    pay: 100.202,
    id: '2',
  },
];
const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    backgroundColor: 'white',
  },
});
const orderList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}
      data={list}
      renderItem={({item, index}) => (
        <ListItem
          leftElement={<Text text={index + 1} type={Typography.PS} />}
          title={<Text text={item.name} type={Typography.PS} />}
          rightTitle={<Text text={item.pay} type={Typography.PS} />}
          bottomDivider
        />
      )}
      keyExtractor={(item) => item.pay}
    />
  );
};

export default orderList;
