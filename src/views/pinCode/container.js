import {connect} from 'react-redux';
import PinCode from './index';
import {
  pinCode,
  getMenu,
  getProductPortion,
  getOrderTagGroups,
  pinCodeAction,
} from '@pinCode/actions';
import {setBaseUrl} from '@settings/actions';

const mapStateToProps = (state) => {
  return {
    menuSuccess: state.pinCode.menuSuccess,

    menu: state.pinCode.menu,
    lang: state.translate.lang,
    error: state.pinCode.error,
    loading: state.pinCode.loader,
    productPortion: state.pinCode.productPortion,
    orderTags: state.pinCode.orderTags,
   };
};
const mapStateToDispatch = (dispatch) => {
  return {
    pinCode: (payload) => dispatch(pinCode(payload)),
    getMenu: (payload) => dispatch(getMenu(payload)),
    getProductPortion: (payload) => dispatch(getProductPortion(payload)),
    getOrderTagGroups: (payload) => dispatch(getOrderTagGroups(payload)),
    getPinCode: (payload, code) => dispatch(pinCodeAction(payload, code)),
    setBaseUrl: (payload) => dispatch(setBaseUrl(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PinCode);
