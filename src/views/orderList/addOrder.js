import React, {PureComponent} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {Actions} from 'react-native-router-flux';
const buttons = require('./data.json');

const logo = require('assets/img/logo.png');
class AddOrder extends PureComponent {
  render() {
    const {addMenu, addFood} = buttons;
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
          <View style={{flex: 3, marginLeft: 5, marginRight: 5}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                {addMenu.map((item) => (
                  <TouchableOpacity style={styles.addOrderButton}>
                    <Text style={styles.orderText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              flex: 8,
              marginRight: 10,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 5,
              }}>
              <View
                style={{
                  flex: 3,
                  backgroundColor: '#fff',
                  padding: 5,
                }}>
                <Text>This screen for order</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={[styles.orderButton, {backgroundColor: '#e63619'}]}
                  underlayColor="#fff">
                  <Text style={[styles.orderText, {color: '#fff'}]}>Kapat</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 5,
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.addFoodButton}>
                <Text style={[styles.orderText, {color: '#fff', fontSize: 14}]}>
                  Breakfast
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addFoodButton}>
                <Text style={[styles.orderText, {color: '#fff', fontSize: 14}]}>
                  Soup
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addFoodButton}>
                <Text style={[styles.orderText, {color: '#fff', fontSize: 14}]}>
                  Wraps
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addFoodButton}>
                <Text style={[styles.orderText, {color: '#fff', fontSize: 14}]}>
                  Sandwiches
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addFoodButton}>
                <Text style={[styles.orderText, {color: '#fff', fontSize: 14}]}>
                  Sandwiches
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 3,
                marginTop: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton}>
                <Text style={[styles.orderText, {color: '#000'}]}>x</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default AddOrder;
