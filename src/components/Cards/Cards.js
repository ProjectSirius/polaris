import React from 'react';
import Card from '../Card';
import MapView from '../MapView';
import { Loader } from 'semantic-ui-react';

const Cards = ({
  data,
  isRequesting,
  classes,
  view,
  type,
  addToGroupOffer,
  removeFromCart,
  isGroupOffering,
  groupOffer,
  addToCart,
  cart,
}) => {
  return isRequesting ? (
    <Loader active inline="centered" size="large" className={classes.loading}>
      Loading
    </Loader>
  ) : view !== 'map' ? (
    <div
      className={
        view === 'table' ? classes.cardsWrapperGrid : classes.cardsWrapperList
      }
    >
      {data.hasOwnProperty('info')
        ? data.info.map(info => (
            <Card
              key={info.id}
              info={info}
              view={view}
              type={type}
              addToGroupOffer={addToGroupOffer}
              removeFromCart={removeFromCart}
              cart={cart}
              addToCart={addToCart}
            />
          ))
        : ''}
    </div>
  ) : (
    <MapView
      data={data}
      addToGroupOffer={addToGroupOffer}
      removeFromGroupOffer={removeFromCart}
      groupOffer={groupOffer}
    />
  );
};

export default Cards;
