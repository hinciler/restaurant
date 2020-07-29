import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {useCountRenders} from './useCountRenders';
const hello = React.memo(({increment}) => {
  useCountRenders();
  return (
    <Button
      title="Clear button"
      type="outline"
      raised
      onPress={increment}
      style={styles.container}
    />
  );
});

export default hello;

const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(10),
  },
});
