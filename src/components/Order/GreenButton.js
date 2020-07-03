import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {colors} from 'config';

export default function ({green_btn, onPress}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.green}>
          {green_btn.map((item, index) => (
            <Button
              onPress={onPress}
              key={index}
              title={item}
              containerStyle={styles.containerStyle}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: colors.background1,
  },

  green: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  containerStyle: {
    padding: normalize(10),
    backgroundColor: 'green',
    margin: '1%',
    flexGrow: 1,
    width: '30%',
    height: normalize(55),
    justifyContent: 'center',
  },

  buttonStyle: {backgroundColor: 'green', padding: 0},

  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    fontSize: normalize(12),
  },
});
