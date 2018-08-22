import React from 'react';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Notification = ({ id, date, summary, classes }) => (
  <Feed.Event
    as={Link}
    to={`/users/${id}`}
    className={classes.notifWrapper}
    icon="pencil"
    date={date}
    summary={summary}
  />
);

export default Notification;
