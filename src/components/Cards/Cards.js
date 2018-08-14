import React from 'react';
import Card from '../Card';

const Cards = ({ data, isRequesting, classes }) => {
  return isRequesting ? (
    <h2>Requesting</h2>
  ) : (
    <div className={classes.cardsWrapper}>
      {data.map(info => (
        <Card key={info.id} info={info} />
      ))}
    </div>
  );
};

export default Cards;
