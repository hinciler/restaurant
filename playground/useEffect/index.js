import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button, Input} from 'react-native-elements';

const Index = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  useEffect(() => {
    //DidUpdate. when any state changes this function will work
    console.log('any state changes this function will work');
    console.log('count: ', count);
    console.log('text: ', text);
  });
  useEffect(() => {
    // when count changes this function will work
    console.log('when count changes this function will work');
    console.log('count: ', count);
  }, [count]);
  useEffect(() => {
    //Run Effects only once
    // DidMount
    console.log('        //Run Effects only once        ');
    return () => {
      //Run Effects only once
      // WillUnmount
      console.log('Use Effect with cleanup');
    };
  }, []);

  return (
    <SafeAreaView>
      <Input value={text} onChangeText={setText} placeholder="BASIC INPUT" />
      <Button title="Solid Button" onPress={() => setCount(count + 1)} />
      <Text>Count : {count}</Text>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
