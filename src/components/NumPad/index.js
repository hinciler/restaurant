import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import {normalize} from 'react-native-elements';
import {Button, GreenButton} from 'components';
import Icon from 'react-native-vector-icons/Feather';
import _ from 'lodash';
import debounce from 'utilities/helpers/debounce';
const dummy = require('./dummy.json');
let products = [];

const {green} = dummy;
export default function ({addProduct}) {
  const [item, setItem] = useState('');
  function numPress(num) {
    const concatCode = item.concat(num);

    setItem(concatCode);
  }
  function backPress() {
    setItem(item.slice(0, item.length - 1));
  }

  const addItem = (itemName) => {
    products = [
      ...products,
      {itemName: itemName, item: item === '' ? '1' : item},
    ];
    setItem('');
    addProduct(products);
  };

  return (
    <View style={styles.container}>
      <GreenButton
        green_btn={green}
        onPress={(itemName) => {
          addItem(itemName);
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={item} editable={false} />
      </View>
      <View style={styles.grid}>
        <View style={styles.row}>
          {_.range(1, 4).map((item) => (
            <Button
              key={item}
              onPress={debounce(() => numPress(item.toString()))}
              style={styles.numOverlay}
              text={item.toString()}
              backgroundColor={'white'}
            />
          ))}
        </View>
        <View style={styles.row}>
          {_.range(4, 7).map((item) => (
            <Button
              key={item}
              onPress={debounce(() => numPress(item.toString()))}
              style={styles.numOverlay}
              text={item.toString()}
              backgroundColor={'white'}
            />
          ))}
        </View>
        <View style={styles.row}>
          {_.range(7, 10).map((item) => (
            <Button
              key={item}
              onPress={debounce(() => numPress(item.toString()))}
              style={styles.numOverlay}
              text={item.toString()}
              backgroundColor={'white'}
            />
          ))}
        </View>
        <View style={styles.row}>
          <Button
            onPress={debounce(() => numPress('.'))}
            style={styles.numOverlay}
            text={'.'}
            backgroundColor={'white'}
          />
          <Button
            onPress={debounce(() => numPress('0'))}
            style={styles.numOverlay}
            text={'0'}
            backgroundColor={'white'}
          />
          <Button
            onPress={debounce(() => backPress())}
            style={styles.numOverlay}
            icon={<Icon name={'delete'} size={normalize(18)} />}
            backgroundColor={'white'}
          />
        </View>
      </View>
    </View>
  );
}
