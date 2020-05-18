import {connect} from 'react-redux';
import Settings from './index';
import {settings} from '@settings/actions';

const mapStateToProps = (state) => {
  return {
    lang: state.translate.lang,
    data: state.settings.data,
    error: state.settings.error,
    loading: state.settings.loading,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    settings: (payload) => dispatch(settings(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(Settings);
