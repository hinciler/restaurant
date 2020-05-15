import React, {PureComponent} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import {styles} from './style';
const logo = require('assets/img/logo.png');

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
            <View style={{flexDirection: 'row'}}>
              <View style={styles.leftComponent}>
                <Image style={styles.logo} source={logo} />
              </View>
              <View style={{flex: 1}}>
                <PinCodeView />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default PinCode;
