import React from 'react';
import { Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

const Card = ({ info: { id, title, description, date, img }, classes }) => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <div className={classes.imgWrapper}>
          <div className={classes.imgModal}>
            <div className={classes.icon}>
              <Link to={`channels/${id}`}>
                <Glyphicon glyph="glyphicon glyphicon-share-alt" />
              </Link>
            </div>
          </div>
          <Link to={`channels/${id}`}>
            <img
              className={classes.img}
              src="https://skirtingboardsdirect.com/wp-content/uploads/2014/12/Fallback-Image-600x600.png"
              alt="Sorry, we can't upload!"
            />
          </Link>
        </div>
        <article className={classes.content}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.countryTime}>
            <span>from Armenia</span>
            <span>{date}</span>
          </div>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              {`${description.slice(0, 181)}..`}
            </p>
          </div>
          <div className={classes.tags}>
            <Label bsStyle="warning">Warning</Label>{' '}
            <Label bsStyle="danger">Danger</Label>{' '}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
