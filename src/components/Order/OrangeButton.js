import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {colors} from 'config';

export default function ({orange_btn}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
    paddingHorizontal: normalize(5),
  },

  containerStyle: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: normalize(5),
    height: normalize(50),
    justifyContent: 'center',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
  },
  buttonStyle: {
    backgroundColor: 'orange',
  },
});
