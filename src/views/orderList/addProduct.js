import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, SectionList} from 'react-native';
import {Text} from 'components';
import {Actions} from 'react-native-router-flux';
import {colors} from 'config';

import {OrangeButton, GreenButton, Header, NumPad, Button} from 'components';
import {normalize} from 'react-native-elements';
import debounce from '../../utilities/helpers/debounce';
const dummy = require('./dummy.json');

const {orange} = dummy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  wrapper: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  item: {
    padding: 2,
    flexDirection: 'row',
  },
  right: {
    flex: 5,
    flexDirection: 'row',
    marginLeft: normalize(4),
    backgroundColor: 'red',
  },
  listWrapper: {flex: 3},
  productListContainer: {flexDirection: 'row', flex: 1},
  productList: {
    borderWidth: 1,
    borderColor: colors.grey,
    flex: 4,
  },
  closeBtn: {flex: 1, marginLeft: 2, marginRight: 2},
});
function OrderList() {
  const {lang} = useSelector((state) => state.translate);
  const [products, setProduct] = useState([]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        <OrangeButton orange_btn={orange} />
        <View style={{flex: 3}}>
          <View style={styles.productListContainer}>
            <View style={styles.productList}>
              {products.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.item,
                    {
                      backgroundColor:
                        products.length === index + 1
                          ? colors.grey
                          : colors.white,
                    },
                  ]}>
                  <Text style={{marginRight: 10}} text={item.item} />
                  <Text text={item.itemName} />
                </View>
              ))}
            </View>
            <View style={styles.closeBtn}>
              <Button
                text={'Close'}
                color={'white'}
                fontSize={normalize(12)}
                style={{height: normalize(50)}}
                onPress={Actions.pop}
              />
            </View>
          </View>
          <View style={{flex: 4}}>
            <NumPad addProduct={(products) => setProduct(products)} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderList;
