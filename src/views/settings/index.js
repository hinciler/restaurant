import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style.js';
import {Header, PickerItem, Text, Button, OptionsMenu} from 'components';
import {Typography} from 'components/Text';
import {Button as NativeButton} from 'react-native-elements';
const axios = require('axios');
import {ModalSelectList} from 'react-native-modal-select-list';
import {colors} from 'config';
import DomainSelect from './domain';

const data = require('./data.json');
const staticModalOptions = [
  {
    label: 'Modal',
    value: 'Modal',
  },
];
export default function () {
  let IPRef = useRef();

  const [selectedIndex, updateIndex] = useState(0);
  const [is_disabled, setDisabled] = useState(false);
  const {settings, options} = data;
  const getSettings = async () => {
    const requestBody = new URLSearchParams({
      query: 'baseconfig',
      serial: '1111',
    });

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const sett = await axios.post(
      'http://78.159.99.84:9000/api/helper',
      requestBody,
      config,
    );
    if (sett.data) {
      setDisabled(true);
      console.log('sett.data', sett.data);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <DomainSelect ref={IPRef} />

      <Button
        text={'Ayarlari Bul'}
        onPress={getSettings}
        color={is_disabled ? colors.grey : colors.active}
        disabled={is_disabled}
      />

      <View style={styles.btngroup}>
        <NativeButton
          title={'TEMEL AYARLAR'}
          type="clear"
          onPress={() => updateIndex(0)}
          titleStyle={styles.btn}
          containerStyle={[
            styles.btn_container,
            selectedIndex === 0 && styles.active,
          ]}
        />
        <NativeButton
          title={'SECENEKLER'}
          type="clear"
          onPress={() => updateIndex(1)}
          titleStyle={styles.btn}
          containerStyle={[
            styles.btn_container,
            selectedIndex === 1 && styles.active,
          ]}
        />
      </View>

      <FlatList
        data={selectedIndex === 0 ? settings : options}
        renderItem={({item}) => (
          <PickerItem text={item.text} value={item.value} />
        )}
        keyExtractor={(item) => item.id}
      />

      <Button text={'KAYDET'} onPress={() => alert('kaydet')} />
    </View>
  );
}
