import React, {useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './style.js';
import {Header, PickerItem, Button} from 'components';
import DomainSelect from './domain';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setBaseUrl} from '@settings/actions';
import {translate} from '@translate/actions';
import {colors} from 'config';

import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
const initial_state = {
  settings_data: [],
  loading: false,
  is_disabled: false,
};
export default function () {
  let IPRef = useRef();
  const [selectedIndex, updateIndex] = useState(0);
  const [settings_state, useSettings] = useState(initial_state);
  const {lang, shortTitle, languages: testLang, selectLangIndex} = useSelector(
    (state) => state.translate,
  );
  const languages = testLang.map((_lang) => ({
    title: _lang.title,
    value: _lang.value,
  }));
  const dispatch = useDispatch();
  const save = async () => {
    try {
      const {port, domain} = IPRef.current.getDomain();
      const baseUrl = `http://${domain}:${port}`;

      dispatch(setBaseUrl({domain, port, baseUrl}));
      const data = {
        domain,
        port,
      };
      await AsyncStorage.setItem('@baseUrl', JSON.stringify(data));
    } catch (e) {
      console.log('e', e);
    }
    Actions.pop();
  };
  const onSelect = (option) => {
    dispatch(translate(option.value));
  };
  const {is_disabled, settings_data = [], loading} = settings_state;
  return (
    <View style={styles.container}>
      <Header />
      <DomainSelect ref={IPRef} />
      <ScrollView style={styles.scroll}>
        <PickerItem
          options={languages}
          item={{title: lang.language, value: lang[shortTitle]}}
          onSelect={(option) => onSelect(option)}
          selectedIndex={selectLangIndex}
        />
      </ScrollView>
      <View style={styles.paddingHorizontal}>
        <Button text={lang.save} onPress={save} color={colors.active} />
      </View>
    </View>
  );
}
