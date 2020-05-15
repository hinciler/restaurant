import {Dimensions} from 'react-native';
import {normalize} from 'react-native-elements';
const {width} = Dimensions.get('window');
export const fontList = {
  regular: 'avenir',
  medium: 'avenir',
  bold: 'AvenirNextLTPro-Bold',
};
export default {
  regular: {
    fontFamily: 'avenir',
  },
  medium: {
    fontFamily: 'avenir',
  },
  bold: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontWeight: 'bold',
  },

  $rem:
    width > 380 ? normalize(20) : (width > 321 ? normalize(18) : normalize(14)) || normalize(20),

  $padding: normalize(16),
};
