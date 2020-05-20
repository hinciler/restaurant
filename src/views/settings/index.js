import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style.js';
import {Header, PickerItem, Button} from 'components';
import {Button as NativeButton} from 'react-native-elements';
const axios = require('axios');
import {colors} from 'config';
import DomainSelect from './domain';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
const data = require('./data.json');

export default function () {
  let IPRef = useRef();

  const [selectedIndex, updateIndex] = useState(0);
  const [is_disabled, setDisabled] = useState(false);
  const [_settings, useSettings] = useState({});
  const {settings, options} = data;

  for (let _idx = 0; _idx < options.length; _idx++) {
    const element = options[_idx];
    element.id = _idx.toString();
    options[_idx] = element;
  }
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
      useSettings(sett.data);
      const setting = sett.data;
      setting.map((item) => {
        settings.map((_sett) => {
          if (item[_sett.key]) {
            const selected = item[_sett.key];
            _sett.list = selected;
            _sett.text = _sett.tr;
            _sett.type = selected.length < 2 ? 'radio' : _sett.type;
            _sett.value = selected[0].Name;
          }
        });
      });
      useSettings(settings);
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
      {_settings.length > 0 ? (
        <View style={{flex: 1}}>
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
            data={selectedIndex === 0 ? _settings : _settings}
            renderItem={({item}) => <PickerItem item={item} />}
            keyExtractor={(item) => item.key}
          />

          <Button text={'KAYDET'} onPress={Actions.pop} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}
