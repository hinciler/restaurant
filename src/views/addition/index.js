import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Header, Button} from 'components';
import {Typography} from 'components/Text';
import {normalize, Icon} from 'react-native-elements';
import {colors} from 'config';
import {addition} from '@addition/actions';
import List from './list.js';
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

function Addition() {
  const {loader, data, error} = useSelector((state) => state.addition);
  const [list, setList] = useState([DATA]);
  const {lang} = useSelector((state) => state.translate);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(addition());
  };
  const push = () => {
    const newData = [];

    setList([...list, newData]);
    console.log('list', list);
  };
  const pop = () => {
    console.log('list[list.length - 1]', list[list.length - 1].length);
    setList((list) => list.slice(0, -1));
  };
  return (
    <View style={styles.container}>
      <Header rightIconName="close" onRightPress={Actions.pop} />
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollsWrapper}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {list.map((item, idx) => (
            <View style={styles.listWrapper} key={idx}>
              <List data={item} _data={item} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomWrapper}>
          <Button text={lang.done.toUpperCase()} style={styles.btn} />
          <Button
            style={styles.btn}
            onPress={push}
            icon={<Icon name="plus" type="feather" size={25} color={'black'} />}
          />
          <Button
            icon={
              <Icon name="minus" type="feather" size={25} color={'black'} />
            }
            style={styles.btn}
            onPress={pop}
            disabled={list.length > 0 && list[list.length - 1].length !== 0}
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
});
