import React from 'react';
import randomColor from 'randomcolor';
import {TextInput, View} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import {Text} from 'components';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {SearchBar} from 'react-native-elements';

const dummy = require('./dummy.json');
const {containerItems} = dummy;

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Ahmet Kaya',
    subtitle: 'Labor',
  },
];

export default function () {
  let _handleContacts = (allContacts) => {
    let help = '';
    let title = '';
    return allContacts.map((user) => {
      help = user.name.replace(/\s\s+/g, ' ').split(' ');
      help.length = 2;
      title = help.map((contact) => {
        return contact[0];
      });

      user.helper = {
        name: user.name.toLowerCase(),
        title: title.toString().replace(',', ''),
        bgColor: randomColor({
          luminosity: 'dark',
        }),
      };

      return user;
    });
  };

  const allContacts = _handleContacts(list);
  const lang = useSelector((state) => state.translate.lang);
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.searchLeftContainer}>
      <View style={styles.searchInputContainer}>
        <SearchBar
          platform="ios"
          containerStyle={styles.searchTextInputStyle}
          inputContainerStyle={{
            backgroundColor: '#F2F3F5',
            padding: 0,
            height: 10,
          }}
          inputStyle={{
            fontSize: 16,
            fontFamily: 'Avenir',
          }}
          clearIcon={{
            type: 'materialIcons',
            name: 'clear',
          }}
          placeholderTextColor="#8E8E92"
          autoCapitalize="none"
          placeholder={lang.pleaseSearch}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={styles.tableContainerStyle}>
        {allContacts.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{
              title: l.helper.title,
              overlayContainerStyle: {backgroundColor: l.helper.bgColor},
            }}
            title={l.helper.name}
            subtitle={l.subtitle}
            bottomDivider
            chevron
          />
        ))}
        {/*<View*/}
        {/*  style={{*/}
        {/*    flexDirection: 'row',*/}
        {/*  }}>*/}
        {/*  {containerItems.map((item, idx) => (*/}
        {/*    <View style={styles.tableHeaderStyle}>*/}
        {/*      <Text text={item} type={Typography.PSB} numberOfLines={1} />*/}
        {/*    </View>*/}
        {/*  ))}*/}
        {/*</View>*/}
      </View>
    </View>
  );
}
