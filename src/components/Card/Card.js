import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CardComponent = ({
  info: { title, description, date, id },
  classes,
  view,
  type,
  removeFromCart,
  addToGroupOffer,
  isGroupOffering,
  groupOffer,
  addToCart,
  cart,
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
            {description}
          </Card.Description>
        </Card.Content>
      </Link>
      {view === 'list' ? (
        ''
      ) : (
        <Card.Content extra style={{ display: 'flex' }}>
          {!cart.selectedIds.includes(id) ? (
            <span
              className={`${classes.moreOffer} ${classes.addOffer}`}
              onClick={() => addToCart(id)}
            >
              <Icon
                name="add to cart"
                size="large"
                className={classes.iconColor}
              />
              <span>Add to cart</span>
            </span>
          ) : (
            <span
              className={`${classes.moreOffer} ${classes.removeOffer}`}
              onClick={() => removeFromCart(id)}
            >
              <Icon
                name="remove"
                size="large"
                className={classes.delIconColor}
              />
              <span>Remove from cart</span>
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
