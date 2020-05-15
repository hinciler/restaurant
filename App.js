import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import Index from './src/routers';
import {store} from './src/state/store';
import {isTablet} from 'react-native-device-info';
import Orientation from 'react-native-orientation-locker';
console.disableYellowBox = true;

//ios font size değişse de fontlar değişmesin diye
if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;

class App extends Component {
  //ana view
  componentDidMount() {
    if (isTablet()) {
      Orientation.lockToLandscape();
    }
    //this will lock the view to Portrait
    else {
      Orientation.lockToPortrait();
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
