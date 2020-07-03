import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
const buttons = require('./data.json');
const logo = require('assets/img/logo.png');
import {normalize} from 'react-native-elements';
import {List, LeftOrderButton} from 'components';
const dummy = require('./dummy.json');
import _ from 'lodash';
var {leftDummy, orange, green} = dummy;
const hasAddProduct = _.filter(leftDummy, {key: 'addProduct'});
if (hasAddProduct) {
  leftDummy = [
    {
      text: 'Add Product',
      disabled: false,
      key: 'addProduct',
    },
    ...leftDummy,
  ];
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  contentContainerStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flex: 5,
    flexDirection: 'row',
  },

  listWrapper: {flex: 3},
});
function Portrait() {
  const [visible, setVisible] = useState(false);
  const {lang} = useSelector((state) => state.translate);
  const pressLeftButton = (key) => {
    switch (key) {
      case 'selectCustomer':
        Actions.customerSearch({showHeader: true});
        setVisible(true);
        break;
      case 'addProduct':
        Actions.addProduct({showHeader: true});
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listWrapper}>
        <List />
      </View>

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.listContainer}
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
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}

export default Portrait;
