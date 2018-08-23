import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MainNavBar from '../components/MainNavBar';
import { toggleMenu, logOut } from '../actions/index';

import {
  selectIsAuth,
  selectCurrentUser,
  selectLanguage,
  selectIsOpenMainMenu,
  selectNotifLength,
} from '../selectors';

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  lang: selectLanguage,
  isOpen: selectIsOpenMainMenu,
  notifLength: selectNotifLength,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: isOpen => dispatch(toggleMenu(isOpen)),
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavBar);
