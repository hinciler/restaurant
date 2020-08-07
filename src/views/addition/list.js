import React, {useState} from 'react';
import {StyleSheet, SectionList, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {useSelector, useDispatch} from 'react-redux';
import {isTablet} from 'react-native-device-info';
import {selected, unSelected} from '@addition/actions';

import {Text} from 'components';
import {Typography} from 'components/Text';
import {ListItem, normalize, Button, Divider} from 'react-native-elements';
import {colors} from 'config';

const OrderList = ({sectionData}) => {
  console.log('sectionData', sectionData);
  const {lang} = useSelector((state) => state.translate);
  const {selectedList} = useSelector((state) => state.addition);
  const dispatch = useDispatch();

  const [list, setSectionData] = useState(sectionData);
  const selectedItem = (item) => {
    const newData = list.filter(({data}) => {
      if (data[0].id === item.id) {
        if (data[0].isSelected) {
          data[0].isSelected = false;
          dispatch(unSelected(item));
        } else {
          data[0].isSelected = true;
          dispatch(selected(item));
        }
      }
      return data;
    });
    setSectionData(newData);
  };
  const setItem = () => {
    console.log('setItem');
  };
  return (
    <View style={styles.container}>
      <ListItem
        leftElement={<Text text={'#'} type={Typography.PMB} />}
        title={<Text text={'28 Table B12'} type={Typography.PMB} />}
        subtitle={<Text text={'Status un appeared'} type={Typography.PSM} />}
        containerStyle={styles.header}
        onPress={setItem}
      />
      <SectionList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.sectionContainer}
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <View style={styles.itemWrapper}>
              <TouchableOpacity
                onLongPress={() => selectedItem(item)}
                style={{
                  backgroundColor: item.isSelected
                    ? colors.background1
                    : 'white',
                }}>
                <ListItem
                  containerStyle={styles.item}
                  leftElement={<Text text={item.count} type={Typography.PMB} />}
                  title={<Text text={item.title} type={Typography.PMB} />}
                  rightTitle={<Text text={item.price} type={Typography.PMB} />}
                />

                <View style={styles.stickerWrapper}>
                  {item.tickets.map((ticket, index) => (
                    <ListItem
                      key={index}
                      containerStyle={styles.sticker}
                      title={<Text text={ticket.title} type={Typography.PSM} />}
                      leftElement={
                        <Text text={ticket.count} type={Typography.PSM} />
                      }
                      rightTitle={
                        <Text text={ticket.price} type={Typography.PSM} />
                      }
                    />
                  ))}

                  <View style={styles.paddingBottom} />
                </View>
                <Divider />
              </TouchableOpacity>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.renderSectionHeader}>
            <Text text={title} type={Typography.PS} />
          </View>
        )}
      />
      <ListItem
        title={
          <Text
            text={lang.ticketOpening + ' : ' + '07:30'}
            type={Typography.PS}
          />
        }
        subtitle={
          <Text
            text={lang.lastOrderTime + ' : ' + '09:39'}
            type={Typography.PS}
          />
        }
        containerStyle={styles.header}
        leftIcon={{name: 'access-time', type: 'MaterialIcons'}}
        bottomDivider
      />
      <ListItem
        title={
          <Text text={lang.total} type={Typography.PLB} color={colors.red} />
        }
        rightTitle={
          <Text text="29.95" type={Typography.PLB} color={colors.red} />
        }
        containerStyle={styles.balance}
        bottomDivider
      />
    </View>
  );
};

export default OrderList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionContainer: {
    flexGrow: 3,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.grey,
    padding: normalize(3),
    justifyContent: 'center',
    paddingLeft: normalize(10),
  },
  renderSectionHeader: {
    backgroundColor: colors.background1,
    paddingLeft: normalize(10),
  },
  textAreaButtons: {
    flexDirection: 'row',

    backgroundColor: '#f5f5f5',
    paddingBottom: normalize(2),
  },
  balance: {
    backgroundColor: colors.background1,
  },
  closeButtonWrapper: {
    flex: 1,
    padding: normalize(5),
    marginLeft: normalize(5),
    backgroundColor: colors.red,
  },
  settleButtonContainer: {
    flex: 1,
    padding: normalize(5),
    backgroundColor: 'white',
    marginRight: normalize(5),
  },
  settleButtonStyle: {backgroundColor: 'white'},
  settleTextStyle: {color: '#000', fontWeight: 'bold'},
  closeButtonStyle: {backgroundColor: colors.red},
  closeTextStyle: {color: '#fff', fontWeight: 'bold'},
  itemWrapper: {
    backgroundColor: colors.active,
  },
  sticker: {
    paddingTop: normalize(1),
    paddingBottom: normalize(1),
    backgroundColor: 'transparent',
  },
  item: {
    paddingTop: normalize(1),
    paddingBottom: normalize(1),
    backgroundColor: 'transparent',
  },
  paddingBottom: {
    paddingBottom: normalize(5),
  },
  stickerWrapper: {
    backgroundColor: 'transparent',
  },
});
