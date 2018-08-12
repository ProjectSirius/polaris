import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  computedMatch: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

ProtectedRoute.defaultProps = {};

export default ProtectedRoute;
