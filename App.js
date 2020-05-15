import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import Index from './src/routers';
import {store} from './src/state/store';
import Orientation from 'react-native-orientation-locker';
import {isTablet} from 'react-native-device-info';

console.disableYellowBox = true;

//ios font size değişse de fontlar değişmesin diye
if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;

const App = () => {
  if (isTablet()) {
    Orientation.lockToLandscape();
  }
  //this will lock the view to Portrait
  else {
    Orientation.lockToPortrait();
  }
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};
export default App;
