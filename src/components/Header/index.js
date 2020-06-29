import React, {PureComponent} from 'react';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import {normalize, Header, Icon} from 'react-native-elements';

export default function ({
  rightText,
  rightIconName,
  rightIconColor = 'black',
  onRightPress,
}) {
  return (
    <Header
      statusBarProps={{translucent: true}}
      containerStyle={styles.header}
      leftComponent={
        <Image style={styles.logo} source={require('assets/img/logo.png')} />
      }
      rightComponent={
        rightText ? (
          <Text> rightText </Text>
        ) : rightIconName ? (
          <Icon
            name={rightIconName}
            type="fontAwesome"
            onPress={onRightPress}
            color={rightIconColor}
            size={normalize(26)}
          />
        ) : (
          <View />
        )
      }
    />
  );
}
