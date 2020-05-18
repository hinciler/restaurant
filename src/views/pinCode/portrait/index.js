import React, {PureComponent} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {Button, Header, PinCodeView} from 'components';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import {styles} from './style';

class PinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressUpdate(props) {
    const payload = {
      query: `
      {
       {
       menu:
        getMenu(name:\\"" + menu_ayar + "\\")
          {categories{
              id,
              name,
              color,
              foreground,
              image,
              header,
              menuId,
              isFastMenu,
              menuItems{productId,name,color,caption,foreground,image, header,quantity,categoryId}
              }}}
      }
        `,
    };
    props.getMenu(payload);
  }

  render() {
    const {lang} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Header />
            {/*<Progress.Bar progress={0.6} width={200} />*/}
            <PinCodeView
              lang={lang}
              onPressUpdate={() => {
                this.onPressUpdate(this.props);
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
PinCode.propTypes = {
  lang: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
PinCode.defaultProps = {
  lang: {},
  error: {msg: 'wrong Passcode'},
};
export default PinCode;
