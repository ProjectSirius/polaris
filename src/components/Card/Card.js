import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

const messages = defineMessages({
  addToCart: {
    id: 'add-to-cart',
    defaultMessage: 'Add to cart',
  },
  removeFromCart: {
    id: 'remove-from-cart',
    defaultMessage: 'Remove from cart',
  },
  findOutMore: {
    id: 'find-out-more',
    defaultMessage: 'Find out more',
  },
});

const imgs = [
  'dj',
  'composer',
  'music',
  'concert',
  'guitar',
  'singer',
  'song',
  'piano',
  'jazz',
];

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
  intl: { formatMessage },
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
          src={`https://source.unsplash.com/600x400/?${
            imgs[Math.floor(Math.random() * imgs.length)]
          }`}
          size={view === 'list' ? 'medium' : 'large'}
        />
        <Card.Content className={classes.cardContent}>
          <p className={classes.date}>{date}</p>
          <Card.Header className={classes.mainTitle}>{title}</Card.Header>
          <Card.Description className={classes.bodyContent}>
            {md.render(description.slice(0,200) + '...')}
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
              <span>{formatMessage(messages.addToCart)}</span>
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
              <span>{formatMessage(messages.removeFromCart)}</span>
            </span>
          )}
          <Link to={`/channel/${id}`}>
            <span className={classes.moreOffer}>
              <Icon
                name="chevron circle right"
                size="large"
                className={classes.iconColor}
              />
              <span>{formatMessage(messages.findOutMore)}</span>
            </span>
          </Link>
        </Card.Content>
      )}
    </Card>
  );
};

export default injectIntl(CardComponent);
