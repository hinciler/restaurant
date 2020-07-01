import React, {PureComponent, useState} from 'react';
import {Alert, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {normalize} from 'react-native-elements';
import {Text, Button} from 'components';
import Icon from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import debounce from 'utilities/helpers/debounce';
import {Actions} from 'react-native-router-flux';
import {Typography} from 'components/Text';
import {colors} from 'config';
export default function ({lang, onPressUpdate, onLogin, errorMessage}) {
  const [code, setCode] = useState('');
  function numPress(num) {
    const concatCode = code.concat(num);

    setCode(concatCode); // '2122520634'
  }
  function backPress() {
    setCode(code.slice(0, code.length - 1));
  }
  const login = () => {
    onLogin(code);
    setCode('');
  };
  const alertUpdateData = () => {
    Alert.alert(
      lang.update_data,
      '',
      [
        {
          text: lang.cancel,
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: lang.yes, onPress: onPressUpdate},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Pin Giriniz'}
          value={code}
          editable={false}
        />
      </View>
      {errorMessage && (
        <View style={styles.errorWrapper}>
          <Text text={errorMessage} color={colors.error} textAlign="center" />
        </View>
      )}

      <View style={styles.grid}>
        <View style={styles.row}>
          {_.range(1, 4).map((item) => (
            <Button
              key={item}
              onPress={debounce(() => numPress(item.toString()))}
              style={styles.numOverlay}
              text={item.toString()}
              backgroundColor={'white'}
            />
          ))}
        </View>
        <View style={styles.row}>
          {_.range(4, 7).map((item) => (
            <Button
              key={item}
              onPress={debounce(() => numPress(item.toString()))}
              style={styles.numOverlay}
              text={item.toString()}
              backgroundColor={'white'}
            />
          ))}
        </View>
        <View style={styles.row}>
          {_.range(7, 10).map((item) => (
            <Button
              key={item}
              onPress={debounce(() => numPress(item.toString()))}
              style={styles.numOverlay}
              text={item.toString()}
              backgroundColor={'white'}
            />
          ))}
        </View>
        <View style={styles.row}>
          <Button
            onPress={debounce(() => backPress())}
            style={styles.numOverlay}
            icon={<Icon name={'delete'} size={normalize(18)} />}
            backgroundColor={'white'}
          />

          <Button
            onPress={debounce(() => numPress('0'))}
            style={styles.numOverlay}
            text={'0'}
            backgroundColor={'white'}
          />
          <Button
            onPress={debounce(login)}
            style={styles.numOverlay}
            icon={<Icon name={'arrow-right-circle'} size={normalize(18)} />}
            backgroundColor={'white'}
          />
        </View>
        <View style={[styles.row, styles.bottomBtn]}>
          <Button
            onPress={debounce(() => Actions.settings())}
            style={[styles.numOverlay, {borderBottomColor: 'red'}]}
            icon={
              <IconMaterial name={'phonelink-setup'} size={normalize(18)} />
            }
            backgroundColor={'white'}
          />
          <Button
            onPress={debounce(() => Actions.qrCode())}
            style={[styles.numOverlay, {borderBottomColor: 'red'}]}
            icon={<IconFontAwesome name={'qrcode'} size={normalize(18)} />}
            backgroundColor={'white'}
          />

          <Button
            onPress={debounce(alertUpdateData)}
            style={[styles.numOverlay, {borderBottomColor: 'red'}]}
            icon={<IconMaterial name={'update'} size={normalize(18)} />}
            backgroundColor={'white'}
          />
        </View>
        <View style={styles.demoInfo}>
          <Text
            text={'Demo girişi için 1234 pin kullanabilirsiniz'}
            color={'red'}
            type={Typography.PL}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text text={'DEMO'} color={'red'} type={Typography.PLB} />
        <Text text={'v 2.0.53'} color={'grey'} type={Typography.PL} />
      </View>
    </View>
  );
}
