import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {Actions} from 'react-native-router-flux';
const buttons = require('../../orderList/data.json');
const logo = require('assets/img/logo.png');

class Portrait extends PureComponent {
  render() {
    const {indexButtons} = buttons;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ddd'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image source={logo} style={{height: 40, width: 80}} />
          <Text style={{marginTop: 12}}> 11.05.2020 </Text>
        </View>

        <View style={{flexDirection: 'row', flexGrow: 1}}>
          <View
            style={{
              flex: 6,
              marginLeft: 10,
              flexDirection: 'column',
            }}>
            <View style={{flex: 3, backgroundColor: '#fff', padding: 5}}>
              <Text>This screen for order</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                marginBottom: 30,
              }}>
              <TouchableOpacity
                style={[styles.orderButton, {flex: 1}]}
                underlayColor="#fff">
                <Text style={styles.orderText}>Settle</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.orderButton,
                  {backgroundColor: '#e63619', flex: 1},
                ]}
                underlayColor="#fff">
                <Text style={[styles.orderText, {color: '#fff'}]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 2, marginLeft: 10, marginRight: 10}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                {indexButtons.map((item, index) => (
                  <TouchableOpacity
                    style={styles.orderButton}
                    underlayColor="#fff"
                    onPress={Actions[item.onPress]}>
                    <Text style={styles.orderText}>{item.text}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Portrait;
