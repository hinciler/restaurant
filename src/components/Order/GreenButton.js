import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, normalize} from 'react-native-elements';

export default function ({green_btn}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.green}>
          {green_btn.map((item, index) => (
            <Button
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
    backgroundColor: 'white',
  },

  green: {
    flex: 1,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  containerStyle: {
    padding: normalize(10),
    backgroundColor: 'green',
    margin: '1%',
    flexGrow: 1,
    width: '30%',
  },

  buttonStyle: {backgroundColor: 'green'},

  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
