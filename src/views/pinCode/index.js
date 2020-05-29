import React, {PureComponent} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portionsSuccess: false,
    };
  }

  getMenu() {
    const menu_setup = 'Menu';
    const payloadMenu = {
      query: `
        {getMenu(name:"${menu_setup}")
          {categories{
              id,
              name,
              color,
              foreground,
              image,
              header,
              menuId,
              isFastMenu,
              menuItems{productId,name,color,caption,foreground,image, header,quantity,categoryId,product{portions{name,id,productId,price}}}
              }
          }}
        `,
    };
    this.props.getMenu(payloadMenu);
  }

  onPressUpdate() {
    this.getMenu();
  }
  async onLogin(code) {
    const _data = new URLSearchParams({
      query: 'conn',
      serial: '1111',
    });
    this.props.connection_control(_data, code);
    const requestBody = new URLSearchParams({
      grant_type: 'password',
      username: 'pda',
      password: '1111',
      client_id: 'pda',
    });

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const api_settings = await axios.post(
      'http://78.159.99.84:9000/Token',
      requestBody,
      config,
    );
    console.log('api_settings', api_settings);
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
