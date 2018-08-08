import React from 'react';
import { DropdownButton, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

const MainNavBar = props => {
  const path = window.location.pathname;
  const { lang } = props;

  return (
    <header className="main-nav-header">
      <div className="top-nav">
        <div className="hamburger">
          <Glyphicon glyph="glyphicon glyphicon-align-justify" />
          <span className="hamburger-title">MENU</span>
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
      <div className="main-nav">
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
        <div className="nav-links-auth">
          <div className="nav-link nav-link-login">
            <Link
              to={{
                pathname: '/login',
                search: `?locale=${lang}`,
              }}
            >
              Login
            </Link>
          </div>
          <div className="dropdown-btn">
            <DropdownButton
              id="dropdown-sign-up"
              title="SIGN UP"
              bsStyle="info"
              pullRight
            >
              {' '}
              <MenuItem href={`/signUpAudience?locale=ru`} eventKey="1">
                SignUp for Audience
              </MenuItem>
              <MenuItem href={`/signUpContentMaker?locale=ru`} eventKey="1">
                SignUp for Content Owner
              </MenuItem>
            </DropdownButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavBar;
