import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Card = ({ info: { title, briefDescription, date }, classes, view }) => {
  return (
    <article
      className={`${classes.card} ${view === 'list' ? classes.cardList : ''}`}
    >
      <header
        className={`${classes.cardHeader} ${
          view === 'list' ? classes.cardHeaderList : ''
        }`}
      >
        <h4 className={classes.cardHeaderTitle}>Think Different</h4>
      </header>
      <div className={classes.cardBody}>
        <p className={classes.date}>{date}</p>
        <h3 className={classes.mainTitle}>{title}</h3>
        <p className={classes.bodyContent}>
          {view === 'list'
            ? briefDescription
            : `${briefDescription.slice(0, 180)}..`}
        </p>
      </div>
      {view === 'list' ? (
        ''
      ) : (
        <button className={`${classes.button} ${classes.buttonPrimary}`}>
          <Glyphicon glyph="glyphicon glyphicon-chevron-right" /> Find out more
        </button>
      )}
    </article>
  );
};

export default Card;
