import React from 'react';
import {View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
  },
];
const orderList = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'magenta'}}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          leftElement={<Text>{i}</Text>}
          title={l.name}
          rightTitle={l.name}
          bottomDivider
        />
      ))}
    </View>
  );
};

export default orderList;
