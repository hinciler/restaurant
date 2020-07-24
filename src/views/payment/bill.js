import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text, {Typography} from 'components/Text';
import {colors} from 'config';
import {normalize, Button} from 'react-native-elements';
import Numpad from './numpad';
const number = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.flex1}>
            <Text text="Total" type="H1R" color={colors.grey} />
          </View>
          <View style={styles.borderBottom}>
            <Text text="29.95" type="H1R" textAlign="right" />
          </View>
        </View>
        <View style={styles.headerContent}>
          <View style={styles.flex1}>
            <Text text="Tahsil Edilen" type="H1R" color={colors.grey} />
          </View>
          <View style={styles.borderBottom}>
            <Text text="29.95" type="H1R" textAlign="right" />
          </View>
        </View>
      </View>
      <Numpad />
      <View style={styles.footer}>
        <Button
          containerStyle={styles.footerButtonContainerStyle}
          buttonStyle={[styles.footerButton]}
          title={
            <Text text={'Discount%'} textAlign="center" type={Typography.H5R} />
          }
        />
        <Button
          containerStyle={styles.footerButtonContainerStyle}
          buttonStyle={[styles.footerButton]}
          title={
            <Text text={'Round'} textAlign="center" type={Typography.H5R} />
          }
        />
        <Button
          containerStyle={styles.footerButtonContainerStyle}
          buttonStyle={[styles.footerButton]}
          title={
            <Text
              text={'Print Bill'}
              textAlign="center"
              type={Typography.H5R}
            />
          }
        />
      </View>
    </View>
  );
};

export default number;
const styles = StyleSheet.create({
  container: {flex: 7, padding: normalize(5)},
  header: {flex: 2},
  footer: {flex: 1, flexDirection: 'row'},
  headerContent: {flexDirection: 'row', justifyContent: 'space-between'},
  flex1: {flex: 1},
  borderBottom: {
    flex: 1,

    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  footerButtonContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    margin: normalize(5),
  },
  footerButton: {
    backgroundColor: colors.white,
  },
});
