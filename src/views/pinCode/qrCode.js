import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, Linking, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Header} from 'components';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connectionControl} from '@pinCode/actions';
import {colors} from 'config';
const initialState = {
  flash_title: 'off',
  flash: false,
};
function QrCode() {
  const {
    loader,
    connectionControl: stateConn,
    connectionControlError,
  } = useSelector((state) => state.pinCode);
  console.log('loader', loader);
  console.log('stateConn', stateConn);
  const dispatch = useDispatch();
  const onSuccess = (code) => {
    console.log('code', code.data);
    const _data = new URLSearchParams({
      query: 'conn',
      serial: '1111',
    });
    dispatch(connectionControl(_data));
  };
  return (
    <View style={styles.container}>
      <Header />
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        reactivate={true}
        reactivateTimeout={5000}
      />
      <Button
        buttonStyle={styles.buttonContainer}
        icon={<Icon name="flash" size={34} color="white" />}
        title="Flash off"
        iconContainerStyle={styles.iconContainer}
        titleStyle={styles.iconContainer}
        loading={!loader}
        disabled={!loader}
        loadingProps={{size: 'large', color: 'red'}}
      />
    </View>
  );
}

export default QrCode;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: colors.background1,
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  iconContainer: {
    padding: 20,
  },
  buttonTouchable: {
    padding: 16,
  },
});
