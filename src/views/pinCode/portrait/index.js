import React, {PureComponent} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import {styles} from './style';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Header />
            <PinCodeView />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default PinCode;
