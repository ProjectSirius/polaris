import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Card = ({ info: { id, title, description, date, img }, classes }) => {
  return (
    <article className={classes.card}>
      <header className={classes.cardHeader}>
        <h4 className={classes.cardHeaderTitle}>Think Different</h4>
      </header>
      <div className={classes.cardBody}>
        <p className={classes.date}>{date}</p>
        <h3 className={classes.mainTitle}>{title}</h3>
        <p className={classes.bodyContent}>
          {description.slice(0, 180)}
          ..
        </p>
      </div>
      <button className={`${classes.button} ${classes.buttonPrimary}`}>
        <Glyphicon glyph="glyphicon glyphicon-chevron-right" /> Find out more
      </button>
    </article>
  );
};

export default Card;
