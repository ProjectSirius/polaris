import React from 'react';
import { Card, Image, Icon, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const CardComponent = ({
  info: { title, briefDescription, date, id },
  classes,
  view,
  type,
  lang,
  groupOffer,
}) => {
  return (
    <Card
      className={`${classes.card} ${view === 'list' ? classes.cardList : ''}`}
    >
      <Form.Checkbox
        className={classes.chadCheck}
        onChange={(e, data) => groupOffer({ id, value: data.checked })}
      />
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
