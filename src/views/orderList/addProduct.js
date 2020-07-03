import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList, SectionList} from 'react-native';
import {Typography} from 'components/Text';
import {Text} from 'components';
import {Actions} from 'react-native-router-flux';
import {colors} from 'config';

import {OrangeButton, GreenButton, Header, NumPad, Button} from 'components';
import {ListItem, normalize} from 'react-native-elements';
const dummy = require('./dummy.json');

const {leftDummy, orange, green} = dummy;

const DATA = [
  {
    data: ['Pizza', 'Burger', 'Risotto'],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  right: {
    flex: 5,
    flexDirection: 'row',
    marginLeft: normalize(4),
    backgroundColor: 'red',
  },
  listWrapper: {flex: 3},
});
function OrderList() {
  const {lang} = useSelector((state) => state.translate);
  return (
    <View style={styles.container}>
      <Header rightIconName="close" onRightPress={Actions.pop} />
      <View style={styles.wrapper}>
        <OrangeButton orange_btn={orange} />
        <View style={{flex: 3}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.grey,
                flex: 4,
              }}>
              <SectionList
                style={styles.sectionContainer}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item, index}) => {
                  return (
                    <ListItem
                      style={{marginTop: -10}}
                      leftElement={
                        <Text text={index + 1} type={Typography.PMB} />
                      }
                      title={<Text text={item} type={Typography.PMB} />}
                    />
                  );
                }}
              />
            </View>
            <View style={{flex: 1, marginLeft: 2, marginRight: 2}}>
              <Button
                text={'Close'}
                color={'white'}
                fontSize={normalize(12)}
                style={{height: normalize(50)}}
                onPress={Actions.pop}
              />
            </View>
          </View>
          <View style={{flex: 2}}>
            <GreenButton green_btn={green} />
          </View>
          <View style={{flex: 2}}>
            <NumPad />
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderList;
