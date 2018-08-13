import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class ConfigurableBtns extends React.Component {
  render() {
    const {
      classes,
      updFilterBar,
      selectFilteringPageFilterBar: selected,
    } = this.props;

    return (
      <ul className={classes.configurable}>
        <li
          onClick={() => updFilterBar('table')}
          className={`${selected === 'table' ? classes.listItemActive : ''} ${
            classes.listItem
          }`}
        >
          <Glyphicon glyph="th-large" />
        </li>
        <li
          onClick={() => updFilterBar('list')}
          className={`${selected === 'list' ? classes.listItemActive : ''} ${
            classes.listItem
          }`}
        >
          {' '}
          <Glyphicon glyph="th-list" />
        </li>
        <li
          onClick={() => updFilterBar('map')}
          className={`${selected === 'map' ? classes.listItemActive : ''} ${
            classes.listItem
          }`}
        >
          <Glyphicon glyph="map-marker" />
        </li>
      </ul>
    );
  }
}

export default ConfigurableBtns;