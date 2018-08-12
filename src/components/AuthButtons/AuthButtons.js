import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthButtons = props => {
  const { lang } = props;

  return (
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
          <MenuItem href={`/signUpAudience?locale=${lang}`} eventKey="1">
            SignUp for Audience
          </MenuItem>
          <MenuItem href={`/signUpContentMaker?locale=${lang}`} eventKey="1">
            SignUp for Content Owner
          </MenuItem>
        </DropdownButton>
      </div>
    </div>
  );
};

AuthButtons.propTypes = {
  lang: PropTypes.string.isRequired,
};

AuthButtons.defaultProps = {
  lang: 'en',
};

export default AuthButtons;
