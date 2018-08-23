import React from 'react';
import Card from '../Card';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Cards = ({ data, isRequesting, classes, view, lang, type }) => {
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
      {Object.keys(data).map(key => {
        if (data[key].briefDescription && data[key].title && data[key].date) {
          return (
            <div>
              <Link
                className={
                  view === 'table'
                    ? classes.parentLinkGrid
                    : classes.parentLinkList
                }
                to={{
                  pathname: `/${type}/${data[key].id}`,
                  search: `?locale=${lang}`,
                }}
              >
                {' '}
                <Card key={data[key].id} info={data[key]} view={view} />
              </Link>
            </div>
          );
        } else {
          return (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                fontWeight: '100',
                fontSize: '20px',
              }}
            >
              Server is loading...
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cards;
