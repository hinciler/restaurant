import React from 'react';
import {Platform} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {Scene, Router, Overlay, Modal} from 'react-native-router-flux';
import Users from 'views/users/container.js';
import PinCode from 'views/pinCode/container';
import Progress from 'views/Progress/index';
import Settings from 'views/settings/container';
import Order from 'views/order';

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
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
        <Scene component={PinCode} key="pinCode" initial />
        <Scene component={Settings} key="settings" />
        <Scene component={Order} key="order" />
        <Scene component={Progress} key="progress" />
      </Modal>
    </Overlay>
  </Router>
);

export default router;
