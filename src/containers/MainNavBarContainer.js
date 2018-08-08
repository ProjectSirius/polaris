import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MainNavBar from '../components/MainNavBar';

import { selectIsAuth, selectCurrentUser, selectLanguage } from '../selectors';

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  lang: selectLanguage,
});

export default connect(
  mapStateToProps,
  null
)(MainNavBar);
