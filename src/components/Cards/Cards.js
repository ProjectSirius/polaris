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
  return isRequesting ? <Loader active inline="centered" size="large" className={classes.loading}>
      Loading
    </Loader> : view !== 'map' ? <div
      className={
        view === 'table' ? classes.cardsWrapperGrid : classes.cardsWrapperList
      }
    >
      {data.hasOwnProperty('info')
        ? Object.keys(data.info).map(el => (
            <Card
              key={data.info.id}
              info={data.info[el]}
              view={view}
              type={type}
              addToGroupOffer={addToGroupOffer}
              removeFromCart={removeFromCart}
              cart={cart}
              addToCart={addToCart}
            />
          ))
        : ''}
    </div> : <MapView data={data} addToGroupOffer={addToCart} removeFromGroupOffer={removeFromCart} groupOffer={cart} type={type} />;
};

export default Cards;
