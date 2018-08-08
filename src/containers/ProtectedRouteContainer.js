import { connect } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute/';
import { createStructuredSelector } from 'reselect';

import { selectIsAuth } from '../selectors';

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
});

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);
