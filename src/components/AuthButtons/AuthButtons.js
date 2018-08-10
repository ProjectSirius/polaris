import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

export default AuthButtons;
