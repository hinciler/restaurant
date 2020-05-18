import React from 'react';
import {Platform} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {Scene, Router, Overlay, Modal} from 'react-native-router-flux';
import Users from 'views/users/container.js';
import PinCode from 'views/pinCode/container';

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
        <Scene component={Users} key="users" initial />
        <Scene component={PinCode} key="pinCode" />
      </Modal>
    </Overlay>
  </Router>
);

export default router;
