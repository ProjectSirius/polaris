import React from 'react';

import FilterBarContainer from '../../containers/FilterBarContainer';
import CardsContainer from '../../containers/CardsContainer';
import ConfigurableAndSearch from '../ConfigurableAndSearch/';

const AudienceHomePage = ({ classes }) => {
  return (
    <div className={classes.filterPageWrapper}>
      <div className={classes.filterPageLeft}>
        <FilterBarContainer />
      </div>
      <div className={classes.filterPageRight}>
        <ConfigurableAndSearch />
        <CardsContainer type="channel" />
      </div>
    </div>
  );
};

export default AudienceHomePage;
