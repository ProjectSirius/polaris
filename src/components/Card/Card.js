import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CardComponent = ({
  info: { title, briefDescription, date, id },
  classes,
  view,
}) => {
  return (
    <Card
      className={`${classes.card} ${view === 'list' ? classes.cardList : ''}`}
    >
      <Image
        src="https://source.unsplash.com/user/erondu/600x400"
        size={view === 'list' ? 'large' : ''}
      />
      <Card.Content>
        <p className={classes.date}>{date}</p>
        <Card.Header className={classes.mainTitle}>{title}</Card.Header>
        <Card.Description className={classes.bodyContent}>
          {view === 'list'
            ? briefDescription
            : view === 'list'
              ? `${briefDescription.slice(0, 250)}..`
              : `${briefDescription.slice(0, 140)}..`}
        </Card.Description>
      </Card.Content>
      {view === 'list' ? (
        ''
      ) : (
        <Card.Content extra style={{ display: 'flex' }}>
          <Link to={`/channel/${id}`}>
            <span className={classes.moreOffer}>
              <Icon
                name="chevron circle right"
                size="large"
                className={classes.iconColor}
              />
              <span>Find out more</span>
            </span>
          </Link>
          <Link to="/">
            <span className={classes.moreOffer} onClick={() => {}}>
              <Icon
                name="shopping cart"
                size="large"
                className={classes.iconColor}
              />
              <span>Make an offer</span>
            </span>
          </Link>
        </Card.Content>
      )}
    </Card>
  );
};

export default CardComponent;
