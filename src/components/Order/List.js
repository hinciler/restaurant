import React from 'react';
import {StyleSheet, SectionList, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {useSelector, useDispatch} from 'react-redux';
import {isTablet} from 'react-native-device-info';

import {Text} from 'components';
import {Typography} from 'components/Text';
import {ListItem, normalize, Button} from 'react-native-elements';
import colors from '../../utilities/config/colors';
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  sectionContainer: {
    flexGrow: 3,
    backgroundColor: colors.background1,
  },
  header: {
    backgroundColor: colors.grey,
    paddingLeft: normalize(10),
  },
  renderSectionHeader: {
    backgroundColor: colors.background1,
    paddingLeft: normalize(10),
  },
  textAreaButtons: {
    flexDirection: 'row',

    backgroundColor: '#f5f5f5',
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
});
const OrderList = () => {
  const {lang} = useSelector((state) => state.translate);

  return (
    <View style={styles.container}>
      <ListItem
        leftElement={<Text text={'#'} type={Typography.PMB} />}
        title={<Text text={'28 Table B12'} type={Typography.PMB} />}
        subtitle={<Text text={'Status un appeared'} type={Typography.PSM} />}
        containerStyle={styles.header}
        bottomDivider
      />
      <SectionList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.sectionContainer}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => {
          return (
            <ListItem
              leftElement={<Text text={index + 1} type={Typography.PMB} />}
              title={<Text text={item} type={Typography.PMB} />}
              rightTitle={<Text text={index * 5} type={Typography.PMB} />}
              subtitle={<Text text={item} type={Typography.PSM} />}
              bottomDivider
            />
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.renderSectionHeader}>
            <Text text={title} type={Typography.PS} />
          </View>
        )}
      />
      <ListItem
        title={<Text text={lang.balance} type={Typography.PS} />}
        subtitle={<Text text={'Status un appeared'} type={Typography.PS} />}
        containerStyle={styles.header}
        leftIcon={{name: 'access-time', type: 'MaterialIcons'}}
        bottomDivider
      />
      <ListItem
        title={
          <Text text={lang.balance} type={Typography.PLB} color={colors.red} />
        }
        rightTitle={
          <Text text="29.95" type={Typography.PLB} color={colors.red} />
        }
        containerStyle={styles.balance}
        bottomDivider
      />
      <View style={styles.textAreaButtons}>
        {isTablet() && (
          <Button
            title={lang.settle}
            containerStyle={styles.settleButtonContainer}
            buttonStyle={styles.settleButtonStyle}
            titleStyle={styles.settleTextStyle}
            onPress={Actions.payment}
          />
        )}
        <Button
          title={lang.close}
          containerStyle={styles.closeButtonWrapper}
          buttonStyle={styles.closeButtonStyle}
          titleStyle={styles.closeTextStyle}
          onPress={Actions.pop}
        />
      </View>
    </View>
  );
};

export default OrderList;
