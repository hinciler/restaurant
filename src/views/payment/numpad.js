import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text, {Typography} from 'components/Text';
import {colors} from 'config';

import {normalize, Icon, Button} from 'react-native-elements';
import _ from 'lodash';
const leftList = ['30', '5', '10', '20', '50', '100'];
const rightList = ['All', '1/n', 'Division', 'balance', '25.95'];
const numpad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        {leftList.map((item, idx) => (
          <Button
            containerStyle={styles.footerButtonContainerStyle}
            buttonStyle={[styles.footerButton]}
            title={
              <Text text={item} textAlign="center" type={Typography.H5R} />
            }
          />
        ))}
      </View>
      <View style={styles.centerWrapper}>
        {_.range(1, 10).map((item, idx) => (
          <Button
            containerStyle={styles.number}
            buttonStyle={[styles.numberButton]}
            title={
              <Text
                text={item}
                textAlign="center"
                type={Typography.H3B}
                color={'white'}
              />
            }
          />
        ))}
        <Button
          containerStyle={styles.number}
          buttonStyle={[styles.numberButton]}
          title={
            <Text
              text={'.'}
              textAlign="center"
              type={Typography.H3B}
              color={'white'}
            />
          }
        />
        <Button
          containerStyle={styles.number}
          buttonStyle={[styles.numberButton]}
          title={
            <Text
              text={'0'}
              textAlign="center"
              type={Typography.H3B}
              color={'white'}
            />
          }
        />
        <TouchableOpacity style={styles.deleteWrapper}>
          <View style={styles.delete}>
            <Icon
              name="delete"
              type="feather"
              color="#fff"
              size={normalize(30)}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rightWrapper}>
        {rightList.map((item, idx) => (
          <Button
            containerStyle={styles.footerButtonContainerStyle}
            buttonStyle={[styles.footerButton]}
            title={
              <Text text={item} textAlign="center" type={Typography.H5R} />
            }
          />
        ))}
      </View>
    </View>
  );
};

export default numpad;

const styles = StyleSheet.create({
  container: {flex: 8, flexDirection: 'row'},
  leftWrapper: {flex: 1},
  centerWrapper: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightWrapper: {flex: 1},
  footerButtonContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background1,
    paddingBottom: normalize(5),
    paddingHorizontal: normalize(4),
  },
  footerButton: {
    backgroundColor: colors.white,
    height: '100%',
  },
  number: {
    width: '33%',
    height: '25%',
    justifyContent: 'center',
    paddingBottom: normalize(5),
    paddingHorizontal: normalize(4),
  },
  numberButton: {
    backgroundColor: '#007acc',
    height: '100%',
  },
  deleteWrapper: {
    width: '33%',
    height: '25%',

    paddingBottom: normalize(5),
    paddingHorizontal: normalize(4),
  },
  delete: {
    backgroundColor: '#007acc',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    justifyContent: 'center',

    elevation: 5,
  },
});
