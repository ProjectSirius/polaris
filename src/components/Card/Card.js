import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const CardComponent = ({
  info: { title, briefDescription, date, id },
  classes,
  view,
  type,
  lang,
  removeFromGroupOffer,
  addToGroupOffer,
  isGroupOffering,
  groupOffer,
}) => {
  return (
    <Card
      className={`${classes.card} ${view === 'list' ? classes.cardList : ''}`}
    >
      <Link
        className={
          view === 'table' ? classes.parentLinkGrid : classes.parentLinkList
        }
        to={{
          pathname: `/${type}/${id}`,
          search: `?locale=${lang}`,
        }}
      >

        <Image
          src="https://source.unsplash.com/user/erondu/600x400"
          size={view === 'list' ? 'medium' : 'large'}
        />
        <Card.Content className={classes.cardContent}>
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
      </Link>
      {view === 'list' ? (
        ''
      ) : (
        <Card.Content extra style={{ display: 'flex' }}>
          {!groupOffer.includes(id) ? (
            <span
              className={`${classes.moreOffer} ${classes.addOffer}`}
              onClick={() => addToGroupOffer(id)}
            >
              <Icon
                name="add to cart"
                size="large"
                className={classes.iconColor}
              />
              <span>Add to group offer</span>
            </span>
          ) : (
            <span
              className={`${classes.moreOffer} ${classes.removeOffer}`}
              onClick={() => removeFromGroupOffer(id)}
            >
              <Icon
                name="remove"
                size="large"
                className={classes.delIconColor}
              />
              <span>Remove from group offer</span>
            </span>
          )}
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
        </Card.Content>
      )}
    </Card>
  );
};

export default CardComponent;
