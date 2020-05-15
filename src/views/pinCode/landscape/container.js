import {connect} from 'react-redux';
import PinCode from './index';
import {pinCode} from '@pinCode/actions';
const mapStateToProps = (state) => {
  return {
    data: state.pinCode.data,
    error: state.pinCode.error,
    loading: state.pinCode.loading,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    pinCode: (payload) => dispatch(pinCode(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PinCode);
