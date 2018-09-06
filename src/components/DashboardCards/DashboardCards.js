import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DashboardCards = ({ userData, currentUser, formatMessage, messages, classes }) => (
  <React.Fragment>
    <Link
      to={{
        pathname: `/${
          currentUser.type === 'content_owner' ? 'contents' : 'channels'
        }/new`,
      }}
    >
      {currentUser.type === 'content_owner'
        ? formatMessage(messages.addNewContent)
        : formatMessage(messages.addNewChannel)}
    </Link>
    <div className={classes.cardsWrapper}>
      {userData.map(({ description, title, id }) => (
        <Card key={id} className={classes.card}>
          <Card.Content header={title} />
          <Card.Content description={description} />
          <Card.Content extra>
            <Icon name="edit" />{' '}
            <Link
              to={{
                pathname: `/${
                  currentUser.type === 'content_owner' ? 'contents' : 'channel'
                  }/${id}`,
              }}
            >
              {`${formatMessage(messages.explore)} `}
            </Link>
          </Card.Content>
        </Card>
      ))}
    </div>
  </React.Fragment>
);

export default DashboardCards;
