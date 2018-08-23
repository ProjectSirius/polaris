import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Notifications from '../components/Notifications';
import { getNotif } from '../actions/index';

import { selectNotif } from '../selectors';

const mapStateToProps = createStructuredSelector({
  notifs: selectNotif,
});

class NotificationsContainer extends React.Component {
  componentDidMount() {
    this.props.getNotif();
  }

  render() {
    const { notifs } = this.props;
    return <Notifications notifs={notifs} />;
  }
}

NotificationsContainer = connect(
  mapStateToProps,
  { getNotif }
)(NotificationsContainer);

export default NotificationsContainer;
