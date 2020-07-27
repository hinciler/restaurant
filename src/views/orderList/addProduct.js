import React, {useCallback, useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
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
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
const dummy = require('./dummy.json');

const {orange, buttons, radioBtn, list, prefixBtns} = dummy;
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
  wrapButton: {
    height: width > 380 ? normalize(30) : normalize(28),
    width: width > 380 ? normalize(90) : normalize(87),
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
  orderTagList: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: 'white',
  },
  badgeStyle: {
    backgroundColor: 'green',
    width: normalize(20),
    height: normalize(15),
    marginRight: normalize(5),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  radioTxtStyle: {
    fontSize: width > 380 ? normalize(11) : normalize(10),
  },
  rowFront: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    height: 50,
  },
  backTextWhite: {
    color: '#FFF',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});

function OrderList() {
  const {lang} = useSelector((state) => state.translate);
  const [products, setProduct] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [selectedIndex, selectRadio] = React.useState(0);
  const [items, setItems] = useState(list);
  const scrollViewRef = useRef();

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

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => toggleSelect(data.item)}
      style={styles.rowFront}
      underlayColor={'#AAA'}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
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
            {/*{list.map((l, i) =>*/}
            {/*  l.multiple ? (*/}
            {/*    <ListItem*/}
            {/*      onPress={() => onPress(l)}*/}
            {/*      key={i}*/}
            {/*      title={l.name}*/}
            {/*      bottomDivider*/}
            {/*      badge={{*/}
            {/*        value: 3,*/}
            {/*        badgeStyle: styles.badgeStyle,*/}
            {/*      }}*/}
            {/*      rightTitle={*/}
            {/*        l.selected ? (*/}
            {/*          <Icon*/}
            {/*            name={'check'}*/}
            {/*            color={'green'}*/}
            {/*            size={normalize(15)}*/}
            {/*          />*/}
            {/*        ) : (*/}
            {/*          <View />*/}
            {/*        )*/}
            {/*      }*/}
            {/*    />*/}
            {/*  ) : (*/}
            {/*    <ListItem*/}
            {/*      onPress={() => onPress(l)}*/}
            {/*      key={i}*/}
            {/*      title={l.name}*/}
            {/*      bottomDivider*/}
            {/*      rightTitle={*/}
            {/*        l.selected ? (*/}
            {/*          <Icon*/}
            {/*            name={'check'}*/}
            {/*            color={'green'}*/}
            {/*            size={normalize(15)}*/}
            {/*          />*/}
            {/*        ) : (*/}
            {/*          <View />*/}
            {/*        )*/}
            {/*      }*/}
            {/*    />*/}
            {/*  ),*/}
            {/*)}*/}
          </View>

          <View style={styles.btnContainer}>
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
