import React, {PureComponent} from 'react';
import LandScape from './landscape';
import Portrait from './portrait';
import {isTablet} from 'react-native-device-info';
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (isTablet()) return <LandScape />;
    else return <Portrait />;
  }
}
