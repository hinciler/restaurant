import React, {useState, useCallback} from 'react';
import {Dimensions, View, TextInput, Animated} from 'react-native';
import {styles} from './style';
import {normalize} from 'react-native-elements';
import {Button, GreenButton} from 'components';
import Icon from 'react-native-vector-icons/Feather';
import _ from 'lodash';
import SlidingUpPanel from 'rn-sliding-up-panel';
const dummy = require('./dummy.json');
let products = [];
import debounce from 'utilities/helpers/debounce';
const PIN_PAD_HEIGHT = 280;
const {green} = dummy;
const useComponentSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback((event) => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  }, []);

  return [size, onLayout];
};
export default function ({addProduct}) {
  const [item, setItem] = useState('');
  const [draggableValue, setDraggableValue] = useState(new Animated.Value(0));
  const [size, onLayout] = useComponentSize();
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

  const opacity = draggableValue.interpolate({
    inputRange: [40, PIN_PAD_HEIGHT],
    outputRange: [0, 1],
  });
  const minusHeight = draggableValue.interpolate({
    inputRange: [40, PIN_PAD_HEIGHT],
    outputRange: [40, 1],
  });
  const paddingBottom = draggableValue.interpolate({
    inputRange: [0, PIN_PAD_HEIGHT],
    outputRange: [0, PIN_PAD_HEIGHT],
  });
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Animated.View
        style={{
          flex: 1,
          paddingBottom: paddingBottom,
        }}>
        <GreenButton
          green_btn={green}
          onPress={(itemName) => {
            addItem(itemName);
          }}
        />
      </Animated.View>

      <SlidingUpPanel
        ref={(c) => (this._panel = c)}
        draggableRange={{top: PIN_PAD_HEIGHT, bottom: 40}}
        animatedValue={draggableValue}
        minimumVelocityThreshold={PIN_PAD_HEIGHT}
        snappingPoints={[PIN_PAD_HEIGHT, 40]}
        containerStyle={{
          paddingHorizontal: 5,
          flex: 1,
        }}
        showBackdrop={false}>
        <View style={styles.panel}>
          <Animated.View style={[styles.dragHandler, {height: minusHeight}]}>
            <Icon
              size={40}
              name="minus"
              type="feather"
              color="rgba(203, 205, 204, 0.5)"
            />
          </Animated.View>

          <Animated.View
            style={[
              {
                opacity: opacity,
              },
              styles.inputAlign,
            ]}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={item} editable={false} />
            </View>
          </Animated.View>
          <View style={styles.grid}>
            <View style={styles.row}>
              {_.range(1, 4).map((item) => (
                <Button
                  key={item}
                  onPress={() => numPress(item.toString())}
                  style={[
                    styles.numOverlay,
                    {width: size?.width / 3 - 5 || 100},
                  ]}
                  text={item.toString()}
                  backgroundColor={'white'}
                />
              ))}
            </View>
            <View style={styles.row}>
              {_.range(4, 7).map((item) => (
                <Button
                  key={item}
                  onPress={() => numPress(item.toString())}
                  style={[
                    styles.numOverlay,
                    {width: size?.width / 3 - 5 || 100},
                  ]}
                  text={item.toString()}
                  backgroundColor={'white'}
                />
              ))}
            </View>
            <View style={styles.row}>
              {_.range(7, 10).map((item) => (
                <Button
                  key={item}
                  onPress={() => numPress(item.toString())}
                  style={[
                    styles.numOverlay,
                    {width: size?.width / 3 - 5 || 100},
                  ]}
                  text={item.toString()}
                  backgroundColor={'white'}
                />
              ))}
            </View>
            <View style={styles.row}>
              <Button
                onPress={() => numPress('.')}
                style={[styles.numOverlay, {width: size?.width / 3 - 5 || 100}]}
                text={'.'}
                backgroundColor={'white'}
              />
              <Button
                onPress={() => numPress('0')}
                style={[styles.numOverlay, {width: size?.width / 3 - 5 || 100}]}
                text={'0'}
                backgroundColor={'white'}
              />
              <Button
                onPress={() => backPress()}
                style={[styles.numOverlay, {width: size?.width / 3 - 5 || 100}]}
                icon={<Icon name={'delete'} size={normalize(18)} />}
                backgroundColor={'white'}
              />
            </View>
          </View>
        </View>
      </SlidingUpPanel>
    </View>
  );
}
