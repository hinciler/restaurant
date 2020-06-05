import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Header} from 'components';
import {orderList} from '@orderList/actions';
import LandScape from './landscape.js';
import {styles} from './style';
function Orderlist() {
  const {loader, data, error} = useSelector((state) => state.orderList);
  const {lang} = useSelector((state) => state.translate);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(orderList());
  };

  return (
    <>
      <Header rightIconName="close" onRightPress={Actions.pop} />
      <View style={styles.container}>
        <LandScape />
      </View>
    </>
  );
}

export default Orderlist;
