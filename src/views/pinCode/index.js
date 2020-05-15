import React, {PureComponent} from 'react';
import LandScape from './landscape/container';
import Portrait from './portrait/container';
import {isTablet} from 'react-native-device-info';
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (isTablet()) {
      return <LandScape />;
    } else {
      return <Portrait />;
    }
  }
}
