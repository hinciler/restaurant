import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style.js';
import {Header, PickerItem, Text, Button} from 'components';
import {Typography} from 'components/Text';
import {Button as NativeButton} from 'react-native-elements';
const axios = require('axios');
const qs = require('querystring');
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
  let modalRef;
  let IPRef = useRef();
  const openModal = () => modalRef.show();
  const saveModalRef = (ref) => (modalRef = ref);
  const onSelectedOption = (value) => {
    console.log(`You selected: ${value}`);

    console.log('IPRef.getData()', IPRef.current.getDomain());
  };

  const [selectedIndex, updateIndex] = useState(0);
  const {settings} = data;
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
    console.log('sett', sett.data);
  };
  return (
    <View style={styles.container}>
      <Header />
      <DomainSelect ref={IPRef} />
      <Button
        text={'Ayarlari Bul'}
        color={colors.primary}
        backgroundColor={colors.secondary}
        onPress={getSettings}
      />
      <View style={styles.btngroup}>
        <NativeButton
          title={<Text text="TEMEL AYARLAR" type={Typography.PS} />}
          type="clear"
          onPress={() => updateIndex(0)}
          containerStyle={[styles.btn, selectedIndex === 0 && styles.active]}
        />
        <NativeButton
          title={<Text text="SECENEKLER" type={Typography.PSS} />}
          type="clear"
          onPress={() => updateIndex(1)}
          containerStyle={[styles.btn, selectedIndex === 1 && styles.active]}
        />
      </View>
      {selectedIndex === 0 ? (
        <FlatList
          data={settings}
          renderItem={({item}) => (
            <PickerItem text={item.text} value="English" onPress={openModal} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.options}>
          <Text text="Hello Live man" />
        </View>
      )}

      <Button text={'KAYDET'} onPress={() => alert('kaydet')} />
      <ModalSelectList
        ref={saveModalRef}
        placeholder={'Text something...'}
        closeButtonText={'Close'}
        options={staticModalOptions}
        onSelectedOption={onSelectedOption}
        disableTextSearch={false}
        numberOfLines={3}
      />
    </View>
  );
}
