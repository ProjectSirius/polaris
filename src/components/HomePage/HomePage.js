import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ title }) => {
  return <div>{title}</div>;
};
HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

HomePage.defaultProps = {
  title: 'Polaris',
};
export default HomePage;
