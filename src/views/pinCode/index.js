import React, {PureComponent} from 'react';
import {View, Image, ScrollView, Platform, NativeModules} from 'react-native';
import {Button, Header, PinCodeView, Text} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';
import {getMenuQueries} from '@queries';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Database from '../../db/database';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import {Typography} from 'components/Text';
import {normalize} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuSuccess: false,
      progress: 0,
      modalVisible: false,
      errorMessage: null,
    };
  }

  async componentDidMount() {
    let lang = '';
    const deviceLang = await AsyncStorage.getItem('@lang');
    console.log('deviceLang', deviceLang);
    if (deviceLang) {
      this.props.translate(deviceLang);
    } else {
      const deviceLanguage =
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
          : NativeModules.I18nManager.localeIdentifier;
      if (deviceLanguage.split('_').length > 1) {
        //en_US
        lang = deviceLanguage.split('_')[0];
      } else {
        lang = deviceLanguage;
      }
      this.props.translate(lang);
    }
    const value = await AsyncStorage.getItem('@baseUrl');
    if (value) {
      this.props.setBaseUrl(value);
    } else {
      const defaultBaseUrl = 'https://androiddemo.sambapos.com:9000';
      this.props.setBaseUrl(defaultBaseUrl);
    }
  }

  componentDidUpdate(prevProps: Readonly<P>) {
    if (
      this.props.userSuccess &&
      prevProps.userSuccess !== this.props.userSuccess
    ) {
      Actions.table();
    }

    if (this.props.error && prevProps.error !== this.props.error) {
      this.setState({
        errorMessage: 'Pin Code Hatalı',
      });
    }
  }

  animate() {
    this.setState({modalVisible: true});
    let progress = 0;
    this.setState({progress});
    setTimeout(() => {
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
          this.setState({modalVisible: false});
        }
        this.setState({progress});
      }, 500);
    }, 1500);
  }

  getMenu() {
    this.props.getMenu(getMenuQueries('Menu'));
  }

  onPressUpdate() {
    this.animate();
    const db = new Database();
    db.deleteTables;
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
    const {errorMessage} = this.state;
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.modalVisible}
          animationOutTiming={800}
          backdropTransitionOutTiming={600}>
          <View style={styles.content}>
            <View style={{justifyContent: 'flex-start'}}>
              <Text
                style={styles.contentTitle}
                text={lang.loading}
                type={Typography.PLB}
              />
              <Text
                style={styles.contentTitle}
                text={lang.please_wait}
                type={Typography.PL}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Progress.Bar
                width={normalize(250)}
                progress={this.state.progress}
              />
            </View>
          </View>
        </Modal>
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
                  onLogin={(code) => this.onLogin(code)}
                />
              </View>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.container_portrait}>
            <Header />
            <ScrollView
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <View style={styles.container_landscape}>
                <PinCodeView
                  lang={lang}
                  onPressUpdate={() => {
                    this.onPressUpdate();
                  }}
                  onLogin={(code) => this.onLogin(code)}
                  errorMessage={errorMessage}
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
