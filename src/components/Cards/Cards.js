import React from 'react';
import Card from '../Card';
import { Loader } from 'semantic-ui-react';

const Cards = ({ data, isRequesting, classes, view, type, groupOffer }) => {
  return isRequesting ? (
    <Loader active inline="centered" size="large" className={classes.loading}>
      Loading
    </Loader>
  ) : (
    <div
      className={
        view === 'table' ? classes.cardsWrapperGrid : classes.cardsWrapperList
      }
    >
      {data.map(info => (
        <Card
          key={info.id}
          info={info}
          view={view}
          type={type}
          groupOffer={groupOffer}
        />
      ))}
    </div>
  );
};

export default Cards;
