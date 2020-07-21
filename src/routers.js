import React from 'react';
import {Platform} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {Scene, Router, Overlay, Modal} from 'react-native-router-flux';
import Users from 'views/users/container.js';
import PinCode from 'views/pinCode/container';
import Settings from 'views/settings/container';
import OrderList from 'views/orderList';
import AddOrder from 'views/orderList/addOrder';
import AddProduct from 'views/orderList/addProduct';
import QrCode from 'views/pinCode/qrCode';
import Table from 'views/table/container';
import Payment from 'views/payment';
import {CustomerSearch} from 'components';

const stateHandler = (prevState, newState, action) => {
  // console.log('onStateChange: ACTION:', action);
};

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const router = () => (
  <Router onStateChange={stateHandler} uriPrefix={prefix}>
    <Overlay key="overlay" panHandlers={null}>
      <Modal key="modal" transitionConfig={transitionConfig} hideNavBar>
        <Scene component={Users} key="users" />
        <Scene component={AddOrder} key="addOrder" />
        <Scene component={PinCode} key="pinCode" initial />
        <Scene component={Settings} key="settings" />
        <Scene component={OrderList} key="orderList" />
        <Scene component={QrCode} key="qrCode" />
        <Scene component={Table} key="table" />
        <Scene component={Payment} key="payment" />
        <Scene component={CustomerSearch} key="customerSearch" />
        <Scene component={AddProduct} key="addProduct" />
      </Modal>
    </Overlay>
  </Router>
);

export default router;
