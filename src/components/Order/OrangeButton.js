import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, normalize} from 'react-native-elements';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  containerStyle: {
    flex: 1,
    padding: normalize(10),
    backgroundColor: 'orange',
    marginTop: normalize(5),
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'orange',
  },
});
