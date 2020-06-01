import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, TouchableOpacity, Linking, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Header, Text} from 'components';
import {Typography} from 'components/Text';
import {Button, normalize} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connectionControl} from '@pinCode/actions';
import {Actions} from 'react-native-router-flux';
import {colors} from 'config';

function QrCode() {
  const {
    loader,
    connectionControl: stateConn,
    connectionControlError,
  } = useSelector((state) => state.pinCode);
  const {lang} = useSelector((state) => state.translate);
  const dispatch = useDispatch();
  const [flashOptions, useFlash] = useState({
    flashText: lang.flashOff,
    flashMode: RNCamera.Constants.FlashMode.off,
    type: false,
    flashIIconName: 'ios-flash',
  });
  const onSuccess = (code) => {
    const _data = new URLSearchParams({
      query: 'conn',
      serial: '1111',
    });

    dispatch(connectionControl(_data, code.data));
  };
  const PressFlash = () => {
    if (flashOptions.type) {
      useFlash({
        flashText: lang.flashOff,
        flashMode: RNCamera.Constants.FlashMode.off,
        type: false,
        flashIIconName: 'ios-flash',
      });
    } else {
      useFlash({
        flashText: lang.flashOn,
        flashMode: RNCamera.Constants.FlashMode.torch,
        type: true,
        flashIIconName: 'ios-flash',
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header rightIconName="close" onRightPress={Actions.pop} />
      {connectionControlError && (
        <View style={styles.errorWrapper}>
          <Text
            text={'There Was An Error'}
            color="red"
            type={Typography.PSM}
            textAlign="center"
          />
        </View>
      )}

      <QRCodeScanner
        onRead={onSuccess}
        flashMode={flashOptions.flashMode}
        reactivate={true}
        reactivateTimeout={5000}
      />

      <Button
        buttonStyle={styles.buttonContainer}
        icon={<Icon name="flash" size={34} color="white" type="Entypo" />}
        onPress={PressFlash}
        title={flashOptions.flashText}
        iconContainerStyle={styles.iconContainer}
        titleStyle={styles.iconContainer}
        loading={loader}
        disabled={loader}
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
  errorWrapper: {
    padding: normalize(10),
  },
});
