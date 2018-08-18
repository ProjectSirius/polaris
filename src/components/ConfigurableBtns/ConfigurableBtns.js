import React from 'react';
import { Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

const ConfigurableBtns = ({
  classes,
  updFilterBar,
  selectFilteringPageFilterBar: selected,
}) => {
  return (
    <ButtonGroup>
      <Button
        bsStyle={selected === 'table' ? 'danger' : 'default'}
        onClick={() => updFilterBar('table')}
      >
        {' '}
        <Glyphicon glyph="th-large" />
      </Button>
      <Button
        bsStyle={selected === 'list' ? 'danger' : 'default'}
        onClick={() => updFilterBar('list')}
      >
        {' '}
        <Glyphicon glyph="th-list" />
      </Button>
      <Button
        bsStyle={selected === 'map' ? 'danger' : 'default'}
        onClick={() => updFilterBar('map')}
      >
        {' '}
        <Glyphicon glyph="map-marker" />
      </Button>
    </ButtonGroup>
  );
};

export default ConfigurableBtns;
