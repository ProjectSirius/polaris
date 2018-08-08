import { connect } from 'react-redux';

import MainNavBar from '../components/MainNavBar';

const mapStateToProps = state => {
  return {
    isAuth: true,
  };
};

export default connect(
  mapStateToProps,
  null
)(MainNavBar);
