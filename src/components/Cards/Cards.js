import React from 'react';
import Card from '../Card';

const Cards = ({ data, isRequesting, classes, view }) => {
  return isRequesting ? (
    <h2>Requesting</h2>
  ) : (
    <div
      className={
        view === 'table' ? classes.cardsWrapperGrid : classes.cardsWrapperList
      }
    >
      {data.map(info => <Card key={info.id} info={info} view={view} />)}
    </div>
  );
};

export default Cards;
