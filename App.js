import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import Index from './src/routers';
import {store} from './src/state/store';
console.disableYellowBox = true;

//ios font size değişse de fontlar değişmesin diye
if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;

class App extends Component {
  //ana view
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
