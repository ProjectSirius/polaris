import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DashboardCards = ({ userData, currentUser, formatMessage, messages }) => (
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
    {userData.map(({ description, title, id }) => (
      <Card key={id}>
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
            {`${formatMessage.explore} `}
          </Link>
        </Card.Content>
      </Card>
    ))}
  </React.Fragment>
);

export default DashboardCards;
