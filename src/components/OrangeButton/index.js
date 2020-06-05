import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Button} from 'react-native-elements';

export default function ({orange_btn}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {orange_btn.map((item, index) => (
          <Button
            key={index}
            title={item}
            containerStyle={styles.containerStyle}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
        ))}
      </ScrollView>
    </View>
  );
}
