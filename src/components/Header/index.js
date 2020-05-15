import React, {PureComponent} from 'react';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import {Button, Header} from 'react-native-elements';

export default function ({rightText, rightIconName, rightIconColor, onRightPress}) {
  return (
    <Header
      containerStyle={styles.header}
      leftComponent={<Image style={styles.logo} source={require('assets/img/logo.png')} />}
      rightComponent={
        rightText ? (
          <Text> rightText </Text>
        ) : rightIconName ? (
          <Button title={rightIconName} />
        ) : (
          <View />
        )
      }
    />
  );
}
