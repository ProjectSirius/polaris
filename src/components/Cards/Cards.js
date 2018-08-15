import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';

const Cards = ({ data, isRequesting, classes, view, lang, type }) => {
  return isRequesting ? (
    <h2>Requesting</h2>
  ) : (
    <div
      className={
        view === 'table' ? classes.cardsWrapperGrid : classes.cardsWrapperList
      }
    >
      {data.map(info => (
        <Link
          className={
            view === 'table' ? classes.parentLinkGrid : classes.parentLinkList
          }
          to={{ pathname: `/${type}/${info.id}`, search: `?locale=${lang}` }}
        >
          {' '}
          <Card key={info.id} info={info} view={view} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
