import React from 'react';
import { Responsive } from 'semantic-ui-react';
import Search from '../../containers/SearchContainer';
import ConfigurableBtnsContainer from '../../containers/ConfigurableBtnsContainer';

const ConfigurableAndSearch = ({ classes }) => {
  return (
    <div className={classes.confAndSearchWrapper}>
      <div className={classes.searchWrapper}>
        <Search />
      </div>
      <Responsive minWidth={500}>
        <div className={classes.confWrapper}>
          <ConfigurableBtnsContainer />
        </div>
      </Responsive>
    </div>
  );
};

export default ConfigurableAndSearch;
