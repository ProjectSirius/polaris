import { connect } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute/';

const mapStateToProps = state => {
  return {
    isAuth: true,
  };
};

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);
