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

const CardComponent = ({
  info: { title, description, createdAt, id, fields },
  classes,
  view,
  type,
  removeFromCart,
  addToGroupOffer,
  isGroupOffering,
  groupOffer,
  addToCart,
  cart,
  lang,
  intl: { formatMessage },
}) => {
  const imgLink = fields
    ? fields.filter(el => +el.idField === 23)[0]
      ? fields.filter(el => +el.idField === 23)[0].value
      : ''
    : '';

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
          src={
            imgLink
              ? imgLink
              : 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a7f5e870e2c0286c20c3f8e5572927&auto=format&fit=crop&w=1350&q=80'
          }
          size={view === 'list' ? 'medium' : 'large'}
        />
        <Card.Content className={classes.cardContent}>
          <p className={classes.date}>{createdAt.slice(0, 10)}</p>
          <Card.Header className={classes.mainTitle}>{title}</Card.Header>
          <Card.Description className={classes.bodyContent}>
            {description && md.render(description.slice(0, 130) + '...')}
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
          <Link
            to={{
              pathname: `/channel/${id}`,
              search: `?locale=${lang}`,
            }}
            className={classes.link}
          >
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
