
import { connect } from 'react-redux';
import  Table from './index'; 
import { table } from '@table/actions' ; 
const mapStateToProps = state => {
  return {
    data: state.table.data,
    error:state.table.error,
    loading:state.table.loading
  };
};
const mapStateToDispatch = dispatch => {
  return {
     table: (payload) => dispatch( table(payload)),
};
};

export default connect(mapStateToProps, mapStateToDispatch)( Table);
        