import React from 'react';
import { Feed } from 'semantic-ui-react';

import Notif from './Notification';

const Notifications = ({ notifs, classes }) => (
  <Feed size="large">
    {notifs.map(({ body, id }) => (
      <Notif classes={classes} key={id} id={id} summary={body} date="today" />
    ))}
  </Feed>
);

export default Notifications;
