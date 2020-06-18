import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style.js';
import {Header, PickerItem, Button} from 'components';
import {Button as NativeButton} from 'react-native-elements';
import {colors} from 'config';
import DomainSelect from './domain';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setBaseUrl} from '@settings/actions';
const {languages} = require('./data.json');
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
  const {lang} = useSelector((state) => state.translate);

  const dispatch = useDispatch();
  const save = async () => {
    console.log('language', languages);
    try {
      const {port, domain} = IPRef.current.getDomain();
      const value = `http://${domain}:${port}`;
      dispatch(setBaseUrl(value));
      await AsyncStorage.setItem('@baseUrl', value);
    } catch (e) {
      console.log('e', e);
    }
    Actions.pop();
  };
  const {is_disabled, settings_data = [], loading} = settings_state;
  return (
    <View style={styles.container}>
      <Header />
      <DomainSelect ref={IPRef} />
      <PickerItem options={languages} item={{value: 'English', title: 'Dil'}} />
      <Button text={lang.save} onPress={save} />
    </View>
  );
}
