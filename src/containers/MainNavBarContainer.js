import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MainNavBar from '../components/MainNavBar';

import { selectIsAuth } from '../selectors';

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
});

export default connect(
  mapStateToProps,
  null
)(MainNavBar);
