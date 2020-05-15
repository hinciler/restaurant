import React, {PureComponent} from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import {Header, PinCodeView} from 'components';

class PinCode extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <View style={styles.container}>
          <View style={styles.left}>
            <Image source={require('assets/img/logo.png')} />
          </View>
          <View style={styles.right}>
            <PinCodeView />
          </View>
        </View>
      </>
    );
  }
}
export default PinCode;
