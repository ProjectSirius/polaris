import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DropdownButton } from 'react-bootstrap';

const AuthButtons = props => {
  const { lang, classes } = props;

  return (
    <div className={classes.navLinksAuth}>
      <div className={`${classes.navLink} ${classes.navLinkLogin}`}>
        <Link
          to={{
            pathname: '/login',
            search: `?locale=${lang}`,
          }}
        >
          Login
        </Link>
      </div>
      <div className={classes.dropDownBtn}>
        <DropdownButton id="dropdown-sign-up" title="SIGN UP" pullRight>
          {' '}
          <div className={classes.linkContainer}>
            <Link to={`/signUpAudience?locale=${lang}`}>
              SignUp for Audience
            </Link>
            <Link to={`/signUpContentMaker?locale=${lang}`}>
              SignUp for Content Owner
            </Link>
          </div>
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
