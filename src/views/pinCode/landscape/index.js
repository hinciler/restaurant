import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'components';
import {styles} from './style';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Pincode</Text>
      </View>
    );
  }
}
export default PinCode;
