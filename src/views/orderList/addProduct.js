import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';

import {
  OrangeButton,
  List,
  LeftOrderButton,
  GreenButton,
  Header,
} from 'components';
import {normalize} from 'react-native-elements';
const dummy = require('./dummy.json');

const {leftDummy, orange, green} = dummy;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
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
    backgroundColor: 'red',
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
  const pressLeftButton = (key) => {
    switch (key) {
      case 'selectCustomer':
        Actions.customerSearch({showHeader: true});
        setVisible(true);
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Header rightIconName="close" onRightPress={Actions.pop} />
      <View style={styles.wrapper}>
        <OrangeButton orange_btn={orange} />
        <GreenButton green_btn={green} />
      </View>
    </View>
  );
}

export default OrderList;
