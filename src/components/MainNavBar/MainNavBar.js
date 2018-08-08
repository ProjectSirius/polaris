import React from 'react';
import { DropdownButton, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';
import AuthButtonsContainer from '../../containers/AuthButtonsContainer';

class MainNavBar extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggleMenu, isOpen } = this.props;

    toggleMenu(!isOpen);
  }

  render() {
    const path = window.location.pathname;
    const { lang, isOpen, isAuth, logOut } = this.props;

    return (
      <header className="main-nav-header">
        <div className="top-nav">
          <div className="hamburger" onClick={this.handleClick}>
            {isOpen ? (
              <React.Fragment>
                <Glyphicon glyph="glyphicon glyphicon-remove" />
                <span className="hamburger-title">CLOSE</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Glyphicon glyph="glyphicon glyphicon-align-justify" />
                <span className="hamburger-title">MENU</span>
              </React.Fragment>
            )}
          </div>
          <div className="main-nav-title-wrapper">
            <h2 className="main-nav-title">
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
          <div className="languages-wrapper">
            <div className="languages">
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
        <div className={isOpen ? 'main-nav main-nav-opened' : 'main-nav'}>
          <nav className="nav-links">
            <div className="nav-link">
              <Link
                to={{
                  pathname: '/audience',
                  search: `?locale=${lang}`,
                }}
              >
                Audience
              </Link>
            </div>
            <div className="nav-link">
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
            <div className="nav-links-auth">
              <div className="nav-link-logout" onClick={() => logOut()}>
                Log Out
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

export default MainNavBar;
