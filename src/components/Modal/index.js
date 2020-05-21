import {Overlay, Icon, Divider} from 'react-native-elements';
import {View, TouchableOpacity, AppState, StyleSheet} from 'react-native';
import {colors} from 'config';
import {TextField, Typography} from './TextField';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import {appLockControll} from '@assets/Variable';
import debounce from 'utilities/helpers/debounce';

export const responseType = {
  success: 'success',
  error: 'error',
};
export default class CustomModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.visible,
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // if (this.props.visible) {
      //   appLockControll.isItLockable = false;
      // }
    } else {
    }
    this.setState({appState: nextAppState});
  };

  render() {
    const {
      visible,
      type,
      describe,
      subtitle,
      onBackdropPress,
      onPress,
      buttonText,
    } = this.props;

    return (
      <Overlay
        isVisible={visible}
        overlayBackgroundColor="white"
        borderRadius={12}
        width="auto"
        overlayStyle={styles.overlayStyle}
        onBackdropPress={() => onBackdropPress}
        height="auto"
        children={1}>
        <View>
          <View style={styles.iconWrapper}>
            <Icon
              raised
              name={type === responseType.success ? 'check' : 'times'}
              type="font-awesome"
              color={
                type === responseType.success ? colors.primary : colors.Error
              }
              reverse
              reverseColor={'#fff'}
              size={30}
              containerStyle={styles.iconStyle}
              // underlayColor={'green'}
            />
          </View>
          <View style={styles.overlayWrapper}>
            <View style={styles.space} />

            <TextField
              type={'PSM'}
              style={{fontSize: 17}}
              text={describe}
              align={'center'}
            />
            <View style={styles.space} />
          </View>
          <View style={styles.btn}>
            <Divider style={styles.divider} />
            <TouchableOpacity
              style={styles.btnWrapper}
              onPress={debounce(() => onPress())}>
              <TextField
                text={buttonText || 'Got it'}
                type={Typography.PL}
                style={{...styles.padding, color: colors.primary}}
                align={'center'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  overlayWrapper: {
    textAlign: 'center',
    // backgroundColor: 'green',
    padding: '10',
    minWidth: 250,
    alignItems: 'center',
  },
  iconStyle: {
    position: 'absolute',
    top: -36,
  },
  overlayStyle: {
    //backgroundColor: 'green',
    margin: '10',
    padding: 0,
  },
  divider: {
    backgroundColor: '$GreyText',
  },
  iconWrapper: {
    alignItems: 'center',
    padding: '$padding',
  },
  padding: {
    padding: '10',
  },
  space: {
    padding: 5,
    backgroundColor: 'transparent',
  },
});
CustomModal.propTypes = {
  visible: PropTypes.bool,
  type: PropTypes.string,
  describe: PropTypes.string,
  buttonText: PropTypes.string,
  onBackdropPress: PropTypes.func,
  onPress: PropTypes.func,
};
