import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import randomColor from 'randomcolor';

const Todo = React.memo(({item}) => {
  const bgColor = randomColor({
    luminosity: 'dark',
  });
  const [todo, setTodo] = useState(item);
  const visible = () => {
    console.log('todo', todo);

    setTodo((c) => ({
      ...c,
      visible: c.visible + 1,
    }));
  };
  return (
    <ListItem
      leftAvatar={{
        title: todo.title[0] + todo.title[1],
        containerStyle: {
          backgroundColor: bgColor,
        },
      }}
      title={todo.title}
      subtitle={todo.date}
      rightTitle={todo.visible.toString()}
      onPress={visible}
      bottomDivider
    />
  );
});

export default Todo;

const styles = StyleSheet.create({});
