import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Todo from './todo';
const todoList = ({todos}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todos.map((todo) => (
        <Todo item={todo} />
      ))}
    </ScrollView>
  );
};

export default todoList;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 50,
  },
});
