import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {colors} from 'config';
import Modal from 'react-native-modal';
import debounce from 'utilities/helpers/debounce';
import {
  OrangeButton,
  Header,
  NumPad,
  Button,
  Text,
  RadioItem,
} from 'components';
import {normalize, ListItem, Badge} from 'react-native-elements';
import {Typography} from '../../components/Text';
import Icon from 'react-native-vector-icons/Feather';
const dummy = require('./dummy.json');

const {orange, buttons, radioBtn, list} = dummy;
const {width} = Dimensions.get('window');

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
  wrapButton: {
    height: width > 380 ? normalize(30) : normalize(35),
    width: 108,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 2,
    flex: 1,
    marginTop: 20,
  },
  portionContainer: {padding: 5, paddingLeft: 10},
  radioBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioItem: {width: '30%', margin: 0, marginRight: -5},
  orderGroupTag: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 9,
  },
  orderTagList: {flex: 1, borderWidth: 1, borderColor: colors.grey},
  badgeStyle: {backgroundColor: 'green', width: 25, height: 20},
});
function OrderList() {
  const {lang} = useSelector((state) => state.translate);
  const [products, setProduct] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [selectedIndex, selectRadio] = React.useState(0);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        animationOutTiming={800}
        backdropTransitionOutTiming={600}>
        <View style={styles.modalContainer}>
          <View style={styles.portionContainer}>
            <Text text={'Portion'} type={Typography.PLB} />
          </View>
          <View style={styles.radioBtnContainer}>
            {radioBtn.map((item, index) => (
              <RadioItem
                checkedColor={'default'}
                style={styles.radioItem}
                text={item.text}
                onPress={(data) => selectRadio(data.index)}
                selectedIndex={selectedIndex}
                index={index}
              />
            ))}
          </View>
          <View style={styles.orderGroupTag}>
            {buttons.map((item, index) => (
              <TouchableOpacity
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
          <View style={styles.orderTagList}>
            {list.map((l, i) =>
              l.multiple ? (
                <ListItem
                  key={i}
                  title={l.name}
                  bottomDivider
                  badge={{
                    value: 3,
                    badgeStyle: styles.badgeStyle,
                  }}
                  rightTitle={
                    <Icon name={'check'} color={'green'} size={normalize(18)} />
                  }
                />
              ) : (
                <ListItem
                  key={i}
                  title={l.name}
                  bottomDivider
                  rightTitle={
                    <Icon name={'check'} color={'green'} size={normalize(18)} />
                  }
                />
              ),
            )}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <Button
              text="Cancel"
              onPress={toggleModal}
              color={colors.white}
              backgroundColor={colors.btnColor}
            />
            <Button
              text="Select"
              onPress={toggleModal}
              color={colors.white}
              backgroundColor={colors.btnColor}
            />
          </View>
        </View>
      </Modal>

      <Header />
      <View style={styles.wrapper}>
        <OrangeButton orange_btn={orange} />
        <View style={{flex: 3}}>
          <View style={styles.productListContainer}>
            <View style={styles.productList}>
              {products.map((item, index) => (
                <TouchableOpacity onPress={toggleModal}>
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
            <NumPad addProduct={(product) => setProduct(product)} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderList;
