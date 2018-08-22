import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ConfigurableBtns = ({
  classes,
  updFilterBar,
  selectFilteringPageFilterBar: selected,
}) => {
  return (
    <Button.Group>
      <Button
        color="twitter"
        size="large"
        active={selected === 'table'}
        className={classes.btn}
        onClick={() => updFilterBar('table')}
      >
        <Icon name="grid layout" />
      </Button>
      <Button
        color="twitter"
        size="large"
        active={selected === 'list'}
        className={classes.btn}
        onClick={() => updFilterBar('list')}
      >
        <Icon name="list" />
      </Button>
      <Button
        color="twitter"
        size="large"
        active={selected === 'map'}
        className={classes.btn}
        onClick={() => updFilterBar('map')}
      >
        <Icon name="map marker" />
      </Button>
    </Button.Group>
  );
};

export default ConfigurableBtns;
