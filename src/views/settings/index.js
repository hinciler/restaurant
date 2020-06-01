import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style.js';
import {Header, PickerItem, Button} from 'components';
import {Button as NativeButton} from 'react-native-elements';
const axios = require('axios');
import {colors} from 'config';
import DomainSelect from './domain';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setBaseUrl} from '@settings/actions';

import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
const data = require('./data.json');
const initial_state = {
  settings_data: [],
  loading: false,
  is_disabled: false,
};
export default function () {
  let IPRef = useRef();
  const [selectedIndex, updateIndex] = useState(0);
  const [settings_state, useSettings] = useState(initial_state);
  let {settings, options} = data;
  const dispatch = useDispatch();

  async function GetSettings() {
    useSettings({
      loading: true,
    });
    const requestBody = new URLSearchParams({
      query: 'baseconfig',
      serial: '1111',
    });

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const api_settings = await axios.post(
      'http://78.159.99.84:9000/api/helper',
      requestBody,
      config,
    );
    const api_settings_data = api_settings.data;
    if (api_settings_data) {
      api_settings_data.map((item) => {
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

      options.data.map((option) => {
        option.text = option.tr;
        option.value = options.options[1].en;
        option.type = 'radio';
        option.list = options.options;
      });
    } else {
      settings = [];
    }
    useSettings({
      settings_data: settings,
      loading: false,
      is_disabled: true,
    });
  }
  const save = async () => {
    try {
      const {port, domain} = IPRef.current.getDomain();
      const value = `http://${domain}:${port}`;
      dispatch(setBaseUrl(value));
      await AsyncStorage.setItem('@baseUrl', value);
    } catch (e) {
      console.log('e', e);
    }
  };
  const {is_disabled, settings_data = [], loading} = settings_state;
  return (
    <View style={styles.container}>
      <Header />
      <DomainSelect ref={IPRef} />

      <Button
        text={'Ayarlari Bul'}
        onPress={GetSettings}
        color={is_disabled ? colors.grey : colors.active}
        disabled={is_disabled}
        loading={loading}
      />
      {settings_data.length > 0 ? (
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
            data={selectedIndex === 0 ? settings_data : options.data}
            renderItem={({item}) => (
              <PickerItem
                item={item}
                options={selectedIndex === 1 ? options.options : null}
              />
            )}
            keyExtractor={(item, index) => index + ''}
          />

          <Button text={'KAYDET'} onPress={save} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}
