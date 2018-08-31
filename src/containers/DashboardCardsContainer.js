import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserData, selectCurrentUser } from '../selectors';
import getUserData from '../actions/user-data';
import DashboardCards from '../components/DashboardCards';
import { delData } from '../actions';

class DashboardCardsContainer extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { userData, currentUser, delData } = this.props;

    return (
      <DashboardCards
        delData={delData}
        userData={userData}
        currentUser={currentUser}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userData: selectUserData,
  currentUser: selectCurrentUser,
});

export default connect(
  mapStateToProps,
  {
    getUserData,
    delData,
  }
)(DashboardCardsContainer);
