import React from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {Text} from 'components';
import {Typography} from 'components/Text';
import {styles} from './style';
import {useSelector} from 'react-redux';

const dummy = require('./dummy.json');
const {containerItems} = dummy;

export default function () {
  const lang = useSelector((state) => state.translate.lang);
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.searchLeftContainer}>
      <View style={styles.searchInputContainer}>
        <Text style={styles.searchTextStyle} text={lang.search} />
        <TextInput
          style={styles.searchTextInputStyle}
          placeholder={lang.pleaseSearch}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <Button
          title={'x'}
          style={{flex: 0.05}}
          buttonStyle={styles.searchBtnStyle}
          titleStyle={styles.searchBtnTextStyle}
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainerStyle}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {containerItems.map((item, idx) => (
              <View style={styles.tableHeaderStyle}>
                <Text text={item} type={Typography.PSB} numberOfLines={1} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
