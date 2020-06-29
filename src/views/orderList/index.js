import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BackHandler, View, Alert} from 'react-native';
import {isTablet} from 'react-native-device-info';

import {Actions} from 'react-native-router-flux';
import {Header} from 'components';
import {orderList} from '@orderList/actions';
import LandScape from './landscape.js';
import Portrait from './portrait.js';
import {styles} from './style';
function Orderlist() {
  const {loader, data, error} = useSelector((state) => state.orderList);
  const {lang} = useSelector((state) => state.translate);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(orderList());
  };
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <>
      <Header />
      <View style={styles.container}>
        {isTablet() ? <LandScape /> : <Portrait />}
      </View>
    </>
  );
}

export default Orderlist;
