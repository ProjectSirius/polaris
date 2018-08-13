import React from 'react';

import FilterBar from '../FilterBar';
import CardsContainer from '../../containers/CardsContainer';
import ConfigurableAndSearch from '../ConfigurableAndSearch/';

const ContentOwnerHomePage = ({ classes }) => {
  return (
    <div className={classes.filterPageWrapper}>
      <FilterBar />
      <ConfigurableAndSearch />
      <CardsContainer />
    </div>
  );
};

export default ContentOwnerHomePage;
