import React from 'react';
import {View, Platform} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
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
        <Scene component={Users} key="users" />
        <Scene component={PinCode} key="pinCode" initial />
      </Modal>
    </Overlay>
  </Router>
);

export default router;
