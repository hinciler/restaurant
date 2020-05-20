import {connect} from 'react-redux';
import PinCode from './index';
import {
  pinCode,
  getMenu,
  getProductPortion,
  getOrderTagGroups,
} from '@pinCode/actions';

const mapStateToProps = (state) => {
  return {
    menuSuccess: state.pinCode.menuSuccess,
    menu: state.pinCode.menu,
    lang: state.translate.lang,
    error: state.pinCode.error,
    loading: state.pinCode.loading,
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
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PinCode);
