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
  isAuth: PropTypes.bool,
  path: PropTypes.string,
  location: PropTypes.object,
  computedMatch: PropTypes.object,
  dispatch: PropTypes.func,
  component: PropTypes.func,
};
export default ProtectedRoute;
