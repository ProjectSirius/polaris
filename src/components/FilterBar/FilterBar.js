import React, { PureComponent } from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';
import { injectIntl, defineMessages } from 'react-intl';

import StarRating from '../../containers/StarRating';
import PriceRangeSlider from '../../containers/PriceRangeSliderContainer';
import CheckboxFilter from '../../containers/CheckboxFilter';
import SelectOptionFilter from '../../containers/SelectOptionFilter';

const messages = defineMessages({
  filtersPanelTitle: {
    id: 'filters-panel-title',
    defaultMessage: 'FILTERS',
  },
  starRatingTitle: {
    id: 'star-rating-title',
    defaultMessage: 'Rating',
  },
  priceRangeTitle: {
    id: 'price-range-title',
    defaultMessage: 'Price Range',
  },
  checkboxFilterTitle: {
    id: 'checkboxes-filter-title',
    defaultMessage: 'Checkboxes',
  },
  selectedOptionFilterTitle: {
    id: 'select-option-filter-title',
    defaultMessage: 'Select',
  },
});

class FilterBar extends PureComponent {
  render() {
    const {
      classes,
      intl: { formatMessage },
    } = this.props;

    return (
      <Panel className={classes.filterBar}>
        <Panel.Heading className={classes.filterHeading}>
          <Glyphicon glyph="filter" />
          <span className={classes.filterHeadingTitle}>
            {formatMessage(messages.filtersPanelTitle)}
          </span>
        </Panel.Heading>
        <Panel.Body>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>
              {formatMessage(messages.starRatingTitle)}
            </div>
            <StarRating />
          </div>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>
              {formatMessage(messages.priceRangeTitle)}
            </div>
            <PriceRangeSlider />
          </div>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>
              <div className={classes.filterTitleWithIcon}>
                <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
                <span style={{ paddingLeft: '6px' }}>
                  {formatMessage(messages.checkboxFilterTitle)}
                </span>
              </div>
            </div>
            <CheckboxFilter />
          </div>
          <div className={classes.filterWrapper}>
            <div className={classes.filterTitle}>
              <div className={classes.filterTitleWithIcon}>
                <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
                <span style={{ paddingLeft: '6px' }}>
                  {formatMessage(messages.selectedOptionFilterTitle)}
                </span>
              </div>
            </div>
            <SelectOptionFilter />
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default injectIntl(FilterBar);
