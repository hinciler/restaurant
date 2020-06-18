import React from 'react';
import {View, StyleSheet} from 'react-native';
import {normalize, Button} from 'react-native-elements';
import {colors} from 'config';
import {Actions} from 'react-native-router-flux';

import Text, {Typography} from 'components/Text';
const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: normalize(10),
  },
  box: {
    flex: 1,
    marginHorizontal: normalize(10),
    justifyContent: 'center',
    paddingBottom: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,

    elevation: 5,
  },
  button: {
    height: '100%',
    backgroundColor: 'white',
  },
  backgroundRed: {backgroundColor: colors.red},
});
const list = [
  {
    title: 'Card',
    key: 'card',
    index: 1,
    isDisabled: true,
  },
  {
    title: 'Credit Card',
    key: 'creditCard',
    index: 2,
    isDisabled: true,
  },
  {
    title: 'Voucher',
    key: 'voucher',
    index: 3,
    isDisabled: true,
  },
  {
    title: 'Customer Account',
    key: 'customerAccount',
    index: 4,
    isDisabled: false,
  },
  {
    title: 'Close',
    key: 'close',
    index: 5,
  },
];
const paymentType = () => {
  const pressed = () => {
    Actions.pop();
  };
  return (
    <View style={styles.container}>
      {list.map((item, index) => (
        <Button
          containerStyle={styles.box}
          buttonStyle={[
            styles.button,
            item.key === 'close' && styles.backgroundRed,
          ]}
          key={index}
          disabled={item.isDisabled}
          onPress={pressed}
          title={
            <Text
              text={item.title}
              textAlign="center"
              color={
                item.isDisabled
                  ? 'gray'
                  : item.key === 'close'
                  ? 'white'
                  : 'black'
              }
              type={Typography.H5R}
            />
          }
        />
      ))}
    </View>
  );
};

export default paymentType;
