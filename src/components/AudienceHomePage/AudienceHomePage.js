import React from 'react';

import FilterBar from '../FilterBar';
import CardsContainer from '../../containers/CardsContainer';
import ConfigurableAndSearch from '../ConfigurableAndSearch/';

const AudienceHomePage = ({ classes }) => {
  return (
    <div className={classes.filterPageWrapper}>
      <div className={classes.filterPageLeft}>
        <FilterBar />
      </div>
      <div className={classes.filterPageRight}>
        <ConfigurableAndSearch />
        <CardsContainer />
      </div>
    </div>
  );
};

export default AudienceHomePage;
