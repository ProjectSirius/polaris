import React from 'react';

import Search from '../../containers/SearchContainer';
import ConfigurableBtnsContainer from '../../containers/ConfigurableBtnsContainer';

const ConfigurableAndSearch = ({ classes }) => {
  return (
    <div className={classes.confAndSearchWrapper}>
      <div className={classes.searchWrapper}>
        <Search />
      </div>
      <div className={classes.confWrapper}>
        <ConfigurableBtnsContainer />
      </div>
    </div>
  );
};

export default ConfigurableAndSearch;
