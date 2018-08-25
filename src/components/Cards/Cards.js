import React from 'react';
import Card from '../Card';
import MapView from '../MapView';
import { Loader } from 'semantic-ui-react';

const Cards = ({
  data,
  isRequesting,
  classes,
  view,
  lang,
  type,
  addToGroupOffer,
  removeFromGroupOffer,
  isGroupOffering,
  groupOffer,
}) => {
  return isRequesting ? (
    <Loader active inline="centered" size="large" className={classes.loading}>
      Loading
    </Loader>
  ) : view === 'map' ? (
    <MapView data={data} />
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
          lang={lang}
          type={type}
          addToGroupOffer={addToGroupOffer}
          removeFromGroupOffer={removeFromGroupOffer}
          groupOffer={groupOffer}
        />
      ))}
    </div>
  );
};

export default Cards;
