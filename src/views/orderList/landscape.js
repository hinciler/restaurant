import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  OrangeButton,
  List,
  LeftOrderButton,
  GreenButton,
  NumPad,
} from 'components';
import {normalize} from 'react-native-elements';
import {isTablet} from 'react-native-device-info';
const dummy = require('./dummy.json');

const {leftDummy, orange, green} = dummy;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  contentContainerStyle: {
    flex: 1,
  },
  right: {
    flex: 5,
    flexDirection: 'row',
    marginLeft: normalize(4),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  listWrapper: {flex: 3},
});
function OrderList() {
  const [visible, setVisible] = useState(false);
  const {lang} = useSelector((state) => state.translate);
  const [products, setProduct] = useState([]);
  const pressLeftButton = (key) => {
    switch (key) {
      case 'selectCustomer':
        Actions.customerSearch({showHeader: true});
        setVisible(true);
        break;
      case 'split_ticket':
        Actions.addition();

        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.container}
        data={leftDummy}
        renderItem={({item, index}) => (
          <LeftOrderButton
            onPress={() => pressLeftButton(item.key)}
            containerStyle={styles.leftButtons}
            item={item}
            text={item.text}
            disabled={item.disabled}
          />
        )}
        ListFooterComponent={
          isTablet() && (
            <LeftOrderButton
              onPress={() => pressLeftButton('split_ticket')}
              containerStyle={styles.leftButtons}
              text={lang.split_ticket}
              disabled={false}
            />
          )
        }
        keyExtractor={(item) => item.key}
      />
      <View style={styles.listWrapper}>
        <List />
      </View>
      <View style={styles.right}>
        <OrangeButton orange_btn={orange} />
        <NumPad addProduct={(products) => setProduct(products)} />
      </View>
    </View>
  );
}

export default OrderList;
