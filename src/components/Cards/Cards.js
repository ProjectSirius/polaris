import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';
import MapView from '../MapView'
import { Loader } from 'semantic-ui-react';


const Cards = ({
  data,
  isRequesting,
  classes,
  view,
  lang,
  type,
  groupOffer,
}) => {
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
          lang={lang}
          type={type}
          groupOffer={groupOffer}
        />
      ))}
    </div>
  ) : (<MapView data={data} />);
};

export default Cards;
