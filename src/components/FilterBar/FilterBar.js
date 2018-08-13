import React, { PureComponent } from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';

import StarRating from '../../containers/StarRating';
import PriceRangeSlider from '../../containers/PriceRangeSliderContainer';
import CheckboxFilter from '../../containers/CheckboxFilter';
import SelectOptionFilter from '../../containers/SelectOptionFilter';

class FilterBar extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Panel className={classes.filterBar}>
        <Panel.Heading className={classes.filterHeading}>
          <Glyphicon glyph="filter" />
          <span className={classes.filterHeadingTitle}>FILTERS</span>
        </Panel.Heading>
        <Panel.Body>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>Rating</div>
            <StarRating />
          </div>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>Price Range</div>
            <PriceRangeSlider />
          </div>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>
              <div className={classes.filterTitleWithIcon}>
                <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
                <span style={{ paddingLeft: '6px' }}>Checkboxes</span>
              </div>
            </div>
            <CheckboxFilter />
          </div>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>
              <div className={classes.filterTitleWithIcon}>
                <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
                <span style={{ paddingLeft: '6px' }}>Select</span>
              </div>
            </div>
            <SelectOptionFilter />
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default FilterBar;
