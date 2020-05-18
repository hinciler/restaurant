import React, {PureComponent} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps.success);
    console.log('this.props', this.props.success);
  }

  onPressUpdate() {
    const menu_setup = 'Menu';
    const payload = {
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
              menuItems{productId,name,color,caption,foreground,image, header,quantity,categoryId}
              }
          }}
        `,
    };
    this.props.getMenu(payload);
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
