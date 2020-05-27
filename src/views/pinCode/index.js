import React, {PureComponent} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button, Header, PinCodeView, Text} from 'components';
import {styles} from './style';
import {isTablet} from 'react-native-device-info';
import axios from 'axios';
import Database from '../../db/database';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import {Typography} from 'components/Text';
import {normalize} from 'react-native-elements';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuSuccess: false,
      progress: 0,
      modalVisible: false,
    };
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
    this.animate();
    const db = new Database();
    db.deleteTables;
    this.getMenu();
  }

  render() {
    const {lang} = this.props;
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
