import {connect} from 'react-redux';
import Users from './index';
import {getUsers} from '@users/actions';

const mapStateToProps = (state) => {
  return {
    data: state.users.data,
    error: state.users.error,
    loading: state.users.loading,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    getUsers: (payload) => dispatch(getUsers(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(Users);
