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
  lang,
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
      {data.hasOwnProperty('info') ? (
        Object.keys(data.info).length === 0 ? (
          <div style={{ fontSize: '23px' }}>Nothing to show. Sorry :(</div>
        ) : (
          Object.keys(data.info).map(el => (
            <Card
              key={data.info[el].id}
              info={data.info[el]}
              view={view}
              type={type}
              addToGroupOffer={addToGroupOffer}
              removeFromCart={removeFromCart}
              cart={cart}
              addToCart={addToCart}
              lang={lang}
            />
          ))
        )
      ) : (
        ''
      )}
    </div>
  ) : (
    <MapView
      data={data}
      addToGroupOffer={addToCart}
      removeFromGroupOffer={removeFromCart}
      groupOffer={cart}
      type={type}
    />
  );
};

export default Cards;
