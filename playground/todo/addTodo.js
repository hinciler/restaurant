import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';
var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};
var description = function () {
  return '_' + Math.random().toString(36).substr(1, 10);
};
const AddTodo = ({addTodo}) => {
  console.log('AddTodo State called');
  const [text, setText] = useState(0);

  const add = () => {
    const data = {
      id: ID(),
      title: text,
      date: description(),
      visible: 0,
    };
    addTodo(data);
    setText('');
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="New Todo"
        containerStyle={styles.inputContainer}
        value={text}
        onChangeText={setText}
      />
      <Icon raised name="plus" type="font-awesome" color="blue" onPress={add} />
    </View>
  );
};

export default React.memo(AddTodo);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: '100%',
    height: 60,
  },
  inputContainer: {
    width: '85%',
  },
});
