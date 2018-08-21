import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const CardComponent = ({
  info: { title, briefDescription, date },
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
        <Card.Content extra>
          <Button
            basic
            className={`${classes.button} ${classes.buttonPrimary}`}
          >
            <Icon
              name="chevron circle right"
              size="large"
              className={classes.iconColor}
            />
            <span>Find out more</span>
          </Button>
        </Card.Content>
      )}
    </Card>
  );
};

export default CardComponent;
