import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DashboardCards = ({
  userData,
  currentUser,
  formatMessage,
  messages,
  classes,
  lang,
}) => (
  <React.Fragment>
    <Link
      to={{
        pathname: `/${
          currentUser.type === 'content_owner' ? 'contents' : 'channels'
        }/new`,
        search: `?locale=${lang}`,
      }}
      className={classes.add}
    >
      <Icon name="add square" />
      {currentUser.type === 'content_owner'
        ? formatMessage(messages.addNewContent)
        : formatMessage(messages.addNewChannel)}
    </Link>
    <div className={classes.cardsWrapper}>
      {userData.map(({ description, title, id, fields }) => {
        const imgLink = fields
          ? fields.filter(el => +el.idField === 23)[0]
            ? fields.filter(el => +el.idField === 23)[0].value !== ''
              ? fields.filter(el => +el.idField === 23)[0].value
              : 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a7f5e870e2c0286c20c3f8e5572927&auto=format&fit=crop&w=1350&q=80'
            : 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a7f5e870e2c0286c20c3f8e5572927&auto=format&fit=crop&w=1350&q=80'
          : 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a7f5e870e2c0286c20c3f8e5572927&auto=format&fit=crop&w=1350&q=80';
        return (
          <Card key={id} className={classes.card}>
            <Card.Content header={title} />
            <Image
              src={
                imgLink
                  ? imgLink
                  : 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a7f5e870e2c0286c20c3f8e5572927&auto=format&fit=crop&w=1350&q=80'
              }
            />
            <Card.Content description={description.slice(0, 130) + '...'} />
            <Card.Content extra>
              <Icon name="edit" />{' '}
              <Link
                to={{
                  pathname: `/${
                    currentUser.type === 'content_owner' ? 'content' : 'channel'
                  }/${id}`,
                  search: `?locale=${lang}`,
                }}
                className={classes.link}
              >
                {`${formatMessage(messages.explore)} `}
              </Link>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  </React.Fragment>
);

export default DashboardCards;
