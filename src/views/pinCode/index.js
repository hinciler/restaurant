import React, {PureComponent} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Header, PinCodeView} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';
import {getMenuQueries} from '@queries';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portionsSuccess: false,
    };
  }
  async componentDidMount() {
    const value = await AsyncStorage.getItem('@baseUrl');
    if (value) {
      this.props.setBaseUrl(value);
    } else {
      const defaultBaseUrl = 'https://androiddemo.sambapos.com:9000';
      this.props.setBaseUrl(defaultBaseUrl);
    }
  }
  getMenu() {
    this.props.getMenu(getMenuQueries('Menu'));
  }

  onPressUpdate() {
    this.getMenu();
  }
  async onLogin(code) {
    const _data = new URLSearchParams({
      query: 'conn',
      serial: '1111',
    });
    this.props.getPinCode(_data, code);
  }
  render() {
    const {lang, loading} = this.props;
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
                    this.onPressUpdate();
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
                    this.onPressUpdate();
                  }}
                  onLogin={(code) => this.onLogin(code)}
                />
              </View>
            </ScrollView>
          </View>
        )}
        <Spinner
          visible={loading}
          animation="none"
          size="large"
          color="#fff"
          textContent={lang.pleaseWait}
          overlayColor="rgba(0,0,0,.80)"
        />
      </View>
    );
  }
}
export default PinCode;
