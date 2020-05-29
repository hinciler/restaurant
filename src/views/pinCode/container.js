import {connect} from 'react-redux';
import PinCode from './index';
import {
  pinCode,
  getMenu,
  getProductPortion,
  getOrderTagGroups,
  connectionControl,
} from '@pinCode/actions';

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
    connection_control: (payload, code) =>
      dispatch(connectionControl(payload, code)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PinCode);
