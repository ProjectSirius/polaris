import React from 'react';
import { DropdownButton, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';

import AuthButtonsContainer from '../../containers/AuthButtonsContainer';

const messages = defineMessages({
  audience: {
    id: 'audience',
    defaultMessage: 'Audience',
  },
  content: {
    id: 'content',
    defaultMessage: 'Content',
  },
});

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleClick() {
    const { toggleMenu, isOpen } = this.props;

    toggleMenu(!isOpen);
  }

  handleLogOut() {
    const { logOut } = this.props;

    logOut();
  }

  render() {
    const path = window.location.pathname;
    const {
      lang,
      isOpen,
      isAuth,
      classes,
      intl: { formatMessage },
    } = this.props;

    return (
      <header className={classes.mainNavHeader}>
        <div className={classes.topNav}>
          <div className={classes.hamburger} onClick={this.handleClick}>
            {isOpen ? (
              <React.Fragment>
                <Glyphicon glyph="glyphicon glyphicon-remove" />
                <span className={classes.hamburgerTitle}>CLOSE</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Glyphicon glyph="glyphicon glyphicon-align-justify" />
                <span className={classes.hamburgerTitle}>MENU</span>
              </React.Fragment>
            )}
          </div>
          <div className={classes.mainNavTitleWrapper}>
            <h2 className={classes.mainNavTitle}>
              <Link
                to={{
                  pathname: '/',
                  search: `?locale=${lang}`,
                }}
              >
                Polaris
              </Link>
            </h2>
          </div>
          <div className={classes.languagesWrapper}>
            <div className={classes.languages}>
              <div>
                <DropdownButton
                  bsStyle="default"
                  title={lang}
                  id="lang-dropdown"
                  pullRight
                >
                  <MenuItem
                    href={`${path}?locale=ru`}
                    eventKey="1"
                    active={lang === 'ru' ? true : false}
                  >
                    Русский
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem
                    href={`${path}?locale=en`}
                    eventKey="2"
                    active={lang === 'en' ? true : false}
                  >
                    English
                  </MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            isOpen
              ? `${classes.mainNav} ${classes.mainNavOpened}`
              : classes.mainNav
          }
        >
          <nav className={classes.navLinks}>
            <div className={classes.navLink}>
              <Link
                to={{
                  pathname: '/audience',
                  search: `?locale=${lang}`,
                }}
              >
                {formatMessage(messages.audience)}
              </Link>
            </div>
            <div className={classes.navLink}>
              <Link
                to={{
                  pathname: '/contentowner',
                  search: `?locale=${lang}`,
                }}
              >
                Content Owner
              </Link>
            </div>
          </nav>
          {isAuth ? (
            <div className={classes.navLinksAuth}>
              <div
                className={classes.navLinkLogout}
                onClick={this.handleLogOut}
              >
                <span>Log Out</span>
              </div>
            </div>
          ) : (
            <AuthButtonsContainer />
          )}
        </div>
      </header>
    );
  }
}

export default injectIntl(MainNavBar);
