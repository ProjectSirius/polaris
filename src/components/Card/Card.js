import React from 'react';
import { Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

const Card = ({
  info: { id, title, description, date, img },
  classes,
  view,
}) => {
  return (
    <div
      className={
        view === 'table' ? classes.cardWrapper : classes.cardWrapperList
      }
    >
      <div className={view === 'table' ? classes.card : classes.cardList}>
        <div className={view === 'list' ? classes.imgWrapper : ''}>
          <Link to={`channels/${id}`}>
            <div className={classes.imgModal}>
              <Link to={`channels/${id}`}>
                <div className={classes.icon}>
                  <Glyphicon glyph="glyphicon glyphicon-share-alt" />
                </div>
              </Link>
            </div>
            <img
              className={view === 'table' ? classes.img : classes.imgList}
              src="https://skirtingboardsdirect.com/wp-content/uploads/2014/12/Fallback-Image-600x600.png"
              alt="Sorry, we can't upload!"
            />
          </Link>
        </div>
        <article
          className={view === 'table' ? classes.content : classes.contentList}
        >
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
