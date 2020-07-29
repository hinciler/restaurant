import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Divider} from 'react-native-elements';

import Hello from './hello';
const Index = () => {
  console.log('index');
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  return (
    <View style={styles.container}>
      <Hello increment={increment} />
      <View style={styles.container} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
