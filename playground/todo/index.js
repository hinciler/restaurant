import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {normalize, Icon, Input} from 'react-native-elements';
import NewTodo from './addTodo';
import TodoList from './todoList';
const Index = () => {
  console.log('Index State called');
  const [size, setSize] = useState(0);
  const [todos, setTodos] = useState([]);
  const newTodo = useCallback(
    (t) => {
      console.log('t', t);
      setTodos((c) => [...c, t]);
    },
    [setTodos],
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NewTodo addTodo={newTodo} />
        <TodoList todos={todos} />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    padding: normalize(10),
  },
});
