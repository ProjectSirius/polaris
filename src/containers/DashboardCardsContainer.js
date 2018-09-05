import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import { selectUserData, selectCurrentUser } from '../selectors';
import getUserData from '../actions/user-data';
import DashboardCards from '../components/DashboardCards';
import { delData } from '../actions';

class DashboardCardsContainer extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { userData, currentUser, delData, intl: { formatMessage } } = this.props;

    return (
      <DashboardCards
        delData={delData}
        userData={userData}
        currentUser={currentUser}
        formatMessage={formatMessage}
        messages={messages}
      />
    );
  }
}

const messages = defineMessages({
  addNewContent: {
    id: 'addNewContent',
    defaultMessage: 'Add new Content',
  },
  addNewChannel: {
    id: 'addNewChannel',
    defaultMessage: 'Add new Channel',
  },
  explore: {
    id: 'explore',
    defaultMessage: 'Explore',
  }
});

const DashboardCardsContainerIntl = injectIntl(DashboardCardsContainer);

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
)(DashboardCardsContainerIntl);
