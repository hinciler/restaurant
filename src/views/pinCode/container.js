import {connect} from 'react-redux';
import PinCode from './index';
import {pinCode, getMenu, getProductPortion} from '@pinCode/actions';

const mapStateToProps = (state) => {
  return {
    success: state.pinCode.success,
    lang: state.translate.lang,
    data: state.pinCode.data,
    error: state.pinCode.error,
    loading: state.pinCode.loading,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    pinCode: (payload) => dispatch(pinCode(payload)),
    getMenu: (payload) => dispatch(getMenu(payload)),
    getProductPortion: (payload) => dispatch(getProductPortion(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PinCode);
