import React, {PureComponent} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';

class PinCode extends PureComponent {
  render() {
    const {lang} = this.props;
    return (
      <View style={styles.container}>
        {isTablet() ? (
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.container_landscape}>
              <View style={styles.left}>
                <Image source={require('assets/img/logo.png')} />
              </View>
              <View style={styles.right}>
                <PinCodeView
                  lang={lang}
                  onPressUpdate={() => {
                    this.onPressUpdate(this.props);
                  }}
                />
              </View>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.container_portrait}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.container_landscape}>
                <PinCodeView
                  lang={lang}
                  onPressUpdate={() => {
                    this.onPressUpdate(this.props);
                  }}
                />
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
export default PinCode;
