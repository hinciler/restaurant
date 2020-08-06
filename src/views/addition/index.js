import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Header, Button, Text} from 'components';
import {Typography} from 'components/Text';
import {normalize, Icon} from 'react-native-elements';
import {colors} from 'config';
import {pop, push} from '@addition/actions';
import List from './list.js';
const DATA = [
  {
    title: 'Burger',
    data: [
      {
        isSelected: false,
        count: '3',
        title: 'Burgers',
        tickets: [
          {
            count: 3,
            price: 100,
            title: 'Burger Chicken',
          },
          {
            count: 5,
            price: 200,
            title: 'waffle',
          },
          {
            count: 5,
            price: 200,
            title: 'cola',
          },
          {
            count: 5,
            price: 200,
            title: 'bread',
          },
          {
            count: 5,
            price: 200,
            title: 'water',
          },
        ],
        price: '100',
      },
    ],
  },
  {
    title: 'Burger',
    data: [
      {
        isSelected: false,
        count: '3',
        title: 'Burgers',
        tickets: [
          {
            count: 3,
            price: 100,
            title: 'Burger Chicken',
          },
          {
            count: 5,
            price: 200,
            title: 'waffle',
          },
          {
            count: 5,
            price: 200,
            title: 'cola',
          },
          {
            count: 5,
            price: 200,
            title: 'bread',
          },
          {
            count: 5,
            price: 200,
            title: 'water',
          },
        ],
        price: '100',
      },
    ],
  },
];
function Addition() {
  const {loader, data, error, sectionData} = useSelector(
    (state) => state.addition,
  );
  sectionData.map((section) => console.log('section', section));
  const [list, setList] = useState([sectionData]);
  console.log('sectionData index', list);
  const {lang} = useSelector((state) => state.translate);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header rightIconName="close" onRightPress={Actions.pop} />
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollsWrapper}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {sectionData.map((item, idx) => (
            <View style={styles.listWrapper} key={idx}>
              <List sectionData={item} _data={item} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomWrapper}>
          <Button text={lang.done.toUpperCase()} style={styles.btn} />
          <Button
            style={styles.btn}
            onPress={() => dispatch(push())}
            icon={<Icon name="plus" type="feather" size={25} color={'black'} />}
          />
          <View style={styles.padding}>
            <Text text={list.length} />
          </View>
          <Button
            icon={
              <Icon name="minus" type="feather" size={25} color={'black'} />
            }
            style={styles.btn}
            onPress={() => dispatch(pop())}
            //  disabled={list.length > 0 && list[list.length - 1].length !== 0}
          />
        </View>
      </View>
    </View>
  );
}

export default Addition;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: normalize(10),
  },
  scrollsWrapper: {
    flexGrow: 1,
  },
  bottomWrapper: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.background1,
    height: 60,
    paddingHorizontal: normalize(40),
    marginHorizontal: normalize(10),
  },
  listWrapper: {
    width: 400,
    marginLeft: normalize(10),
  },
  padding: {
    paddingHorizontal: normalize(10),
  },
});
