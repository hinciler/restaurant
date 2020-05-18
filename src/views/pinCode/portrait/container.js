import {connect} from 'react-redux';
import PinCode from './index';
import {getMenu} from '@pinCode/actions';
const mapStateToProps = (state) => {
  return {
    lang: state.translate.lang,
    data: state.pinCode.data,
    error: state.pinCode.error,
    loading: state.pinCode.loading,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    getMenu: (payload) => dispatch(getMenu(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PinCode);
