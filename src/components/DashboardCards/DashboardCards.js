import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DashboardCards = ({ userData, currentUser }) => (
  <React.Fragment>
    <Link
      to={{
        pathname: `/${
          currentUser.type === 'content_owner' ? 'contents' : 'channels'
        }/new`,
      }}
    >
      Add new Channel
    </Link>
    {userData.map(({ description, title, id }) => (
      <Card>
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
            Explore{' '}
          </Link>
        </Card.Content>
      </Card>
    ))}
  </React.Fragment>
);

export default DashboardCards;