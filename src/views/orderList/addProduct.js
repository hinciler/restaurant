import React, {useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {colors} from 'config';
import {
  OrangeButton,
  Header,
  NumPad,
  Button,
  Text,
  OrderTagModal,
} from 'components';
import {normalize} from 'react-native-elements';
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
  productListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  productList: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  productListWrapper: {
    flexGrow: 4,

    borderWidth: 1,
    borderColor: colors.grey,
  },
  closeBtn: {marginLeft: 2, marginRight: 2, paddingHorizontal: normalize(10)},
});

function OrderList() {
  const {lang} = useSelector((state) => state.translate);
  const [products, setProduct] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const scrollViewRef = useRef();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <OrderTagModal
        setModalVisible={setModalVisible}
        isModal={isModalVisible}
      />

      <Header />
      <View style={styles.wrapper}>
        <OrangeButton orange_btn={orange} />
        <View style={{flex: 3}}>
          <View style={styles.productListContainer}>
            <View style={styles.productListWrapper}>
              <ScrollView
                contentContainerStyle={styles.productList}
                onContentSizeChange={(contentWidth, contentHeight) => {
                  scrollViewRef.current.scrollToEnd();
                }}
                ref={scrollViewRef}>
                {products.map((item, index) => (
                  <TouchableOpacity onPress={toggleModal} key={index}>
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
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <Button
              text={'Close'}
              color={'white'}
              fontSize={normalize(12)}
              contentContainerStyle={{padding: 10}}
              style={{padding: normalize(10), marginHorizontal: normalize(5)}}
              onPress={Actions.pop}
            />
          </View>
          <View style={{flex: 4}}>
            <NumPad addProduct={(product) => setProduct(product)} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderList;
