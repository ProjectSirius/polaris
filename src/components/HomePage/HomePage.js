import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

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
