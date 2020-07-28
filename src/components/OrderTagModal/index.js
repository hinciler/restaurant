import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Typography} from '../Text';
import {Badge, normalize} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import Modal from 'react-native-modal';
import {styles} from './style';
import {Button, Text, RadioItem} from 'components';
import debounce from 'utilities/helpers/debounce';
import {colors} from 'config';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
const {width} = Dimensions.get('window');
const dummy = require('./dummy.json');
const {buttons, radioBtn, prefixBtns, list} = dummy;

export default function (props) {
  const {lang} = useSelector((state) => state.translate);
  const [selectedIndex, selectRadio] = React.useState(0);
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [items, setItems] = useState(list);

  useEffect(function effectFunction() {
    onSelectMenu(0);
  }, []);

  const onSelectMenu = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      setOldId(id);
      if (selected.get(id) !== true) {
        newSelected.set(id, !selected.get(id));
      }
      if (id !== oldId) {
        newSelected.delete(oldId, !selected.get(oldId));
      }
      setSelected(newSelected);
    },
    [oldId, selected],
  );

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => toggleSelect(data.item)}
      style={styles.rowFront}
      underlayColor={'#AAA'}>
      <View style={styles.renderItemContainer}>
        <Text text={data.item.name} style={{margin: normalize(3)}} />
        <View style={{flexDirection: 'row'}}>
          {data.item.multiple ? (
            <Badge badgeStyle={styles.badgeStyle} value="3" status="error" />
          ) : (
            <View />
          )}
          {data.item.selected ? (
            <Icon
              style={{marginRight: 5}}
              name={'check'}
              color={'green'}
              size={normalize(18)}
            />
          ) : (
            <View />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const toggleSelect = (item) => {
    setItems(
      items.map((i) => {
        if (item === i) {
          i.selected = true;
        }
        return i;
      }),
    );
  };

  const deleteRow = (rowMap, rowItem) => {
    closeRow(rowMap, rowItem.key);
    setItems(
      items.map((i) => {
        if (rowItem === i) {
          i.selected = false;
        }
        return i;
      }),
    );
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item)}>
        <Text style={styles.backTextWhite} text={lang.cancel} />
      </TouchableOpacity>
    </View>
  );

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  return (
    <Modal
      isVisible={props.isModal}
      animationOutTiming={800}
      backdropTransitionOutTiming={600}>
      <View style={styles.modalContainer}>
        <View style={styles.portionContainer}>
          <Text text={'Portion'} type={Typography.PLB} />
        </View>
        <View style={styles.radioBtnContainer}>
          {radioBtn.map((item, index) => (
            <RadioItem
              key={index}
              checkedColor={'default'}
              style={styles.radioItem}
              text={item.text}
              onPress={(data) => selectRadio(data.index)}
              selectedIndex={selectedIndex}
              index={index}
              textStyle={styles.radioTxtStyle}
            />
          ))}
        </View>
        <View style={styles.orderGroupTag}>
          {buttons.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={debounce(() => onSelectMenu(index))}
              style={[
                styles.wrapButton,
                {
                  backgroundColor: selected.get(index)
                    ? colors.white
                    : colors.grey2,
                  borderBottomLeftRadius: index === 0 || index === 3 ? 2 : 0,
                  borderTopLeftRadius: index === 0 || index === 3 ? 2 : 0,
                  borderBottomRightRadius:
                    index === buttons.length - 1 || index === 2 ? 2 : 0,
                  borderTopRightRadius:
                    index === buttons.length - 1 || index === 2 ? 2 : 0,
                  marginTop: 4,
                },
              ]}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  text={item}
                  type={Typography.PSB}
                  style={{marginRight: 3}}
                />
                {index === 0 ? <Badge value="3" status="error" /> : <View />}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text text={'Max:9999/Min:0'} type={Typography.PS} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: normalize(3),
          }}>
          {prefixBtns.map((item, index) => (
            <Button
              key={index}
              text={item.name}
              color={'white'}
              backgroundColor={item.color}
              style={{
                width: (width - 70) / prefixBtns.length,
                margin: normalize(2),
              }}
            />
          ))}
        </View>
        <View style={styles.orderTagList}>
          <SwipeListView
            data={items}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-75}
            onRowDidOpen={onRowDidOpen}
            disableRightSwipe={true}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            text="Cancel"
            onPress={() => props.setModalVisible(false)}
            color={colors.white}
            backgroundColor={colors.btnColor}
          />
          <Button
            text="Select"
            onPress={() => props.setModalVisible(false)}
            color={colors.white}
            backgroundColor={colors.btnColor}
          />
        </View>
      </View>
    </Modal>
  );
}
