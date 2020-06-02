import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Header, Text} from 'components';
import {Typography} from 'components/Text';
import {Button, normalize} from 'react-native-elements';
import OrderList from './orderList';
import Number from './number';
import {payTerminalTicket} from '@payment/actions';
import {styles} from './style';
function Payment() {
  const {loader, data, error} = useSelector((state) => state.payment);
  const {lang} = useSelector((state) => state.translate);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(payTerminalTicket());
  };

  return (
    <View style={styles.container}>
      <Header rightIconName="close" />
      <View style={styles.content}>
        <OrderList />
        <Number />
      </View>
    </View>
  );
}

export default Payment;
