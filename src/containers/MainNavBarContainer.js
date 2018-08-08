import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MainNavBar from '../components/MainNavBar';
import { toggleMenu, logOut } from '../actions/index';

import {
  selectIsAuth,
  selectCurrentUser,
  selectLanguage,
  selectIsOpenMainMenu,
} from '../selectors';

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  lang: selectLanguage,
  isOpen: selectIsOpenMainMenu,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: isOpen => dispatch(toggleMenu(isOpen)),
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavBar);
