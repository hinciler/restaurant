import React, {PureComponent} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';
import axios from 'axios';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portionsSuccess: false,
    };
  }
  async getTicketTags() {
    const requestBody = new URLSearchParams({
      query: 'tickettags',
      serial: '111',
    });

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const sett = await axios.post(
      'http://78.159.99.84:9000/api/helper',
      requestBody,
      config,
    );
    console.log('sett', sett.data);
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
    this.getTicketTags();
  }

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
