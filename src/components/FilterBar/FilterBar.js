import React, { PureComponent } from 'react';
import { Icon, Button, Responsive, Modal } from 'semantic-ui-react';
import { injectIntl, defineMessages } from 'react-intl';

import StarRating from '../../containers/StarRating';
import PriceRangeSlider from '../../containers/PriceRangeSliderContainer';
import CheckboxFilter from '../../containers/CheckboxFilter';
import SelectOptionFilter from '../../containers/SelectOptionFilter';
import GroupOffer from '../../containers/GroupOfferContainer';

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
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggleMenu, isOpen } = this.props;

    toggleMenu(!isOpen);
  }

  render() {
    const {
      classes,
      intl: { formatMessage },
      isOpen,
    } = this.props;

    return (
      <div className={classes.filterWrapper}>
        <div className={classes.filterHeading} onClick={this.handleClick}>
          <Icon name="filter" />
          <span className={classes.filterHeadingTitle}>
            {formatMessage(messages.filtersPanelTitle)}
          </span>
        </div>
        <div
          className={
            !isOpen
              ? classes.filterItemsWrapper
              : `${classes.filterItemsWrapperOpen} ${
                  classes.filterItemsWrapper
                }`
          }
        >
          <div className={classes.filterItems}>
            <div className={classes.filterItem}>
              <div className={classes.filterTitle}>
                {formatMessage(messages.starRatingTitle)}:
              </div>
              <StarRating />
            </div>
            <div className={classes.filterItem}>
              <div className={classes.filterTitle}>
                {formatMessage(messages.priceRangeTitle)}:
              </div>
              <PriceRangeSlider />
            </div>
            <div className={classes.filterItem}>
              <div className={classes.filterTitle}>
                <div className={classes.filterTitleWithIcon}>
                  <Icon name="chevron down" />
                  <span style={{ paddingLeft: '6px' }}>
                    {formatMessage(messages.checkboxFilterTitle)}:
                  </span>
                </div>
              </div>
              <CheckboxFilter />
            </div>
            <div className={classes.filterItem}>
              <div className={classes.filterTitle}>
                <div className={classes.filterTitleWithIcon}>
                  <Icon name="chevron down" />
                  <span style={{ paddingLeft: '6px' }}>
                    {formatMessage(messages.selectedOptionFilterTitle)}:
                  </span>
                </div>
              </div>
              <SelectOptionFilter />
            </div>
            <div className={classes.filterItem}>
              <Modal
                style={{
                  height: 500,
                  position: 'absolute',
                  width: '900px',
                  left: 'calc(50% - 450px)',
                  top: 'calc(50% - 250px)',
                  display: 'flex !important',
                  justifyContent: 'center',
                }}
                centered
                dimmer
                trigger={<Button>Show Modal</Button>}
              >
                <GroupOffer />
              </Modal>
            </div>
          </div>
          <Responsive
            onClick={this.handleClick}
            className={classes.closeFilterWrapper}
            maxWidth={586}
          >
            {isOpen ? (
              <span className={classes.closeFilter}>
                <Icon name="remove" />
              </span>
            ) : (
              ''
            )}
          </Responsive>
        </div>
      </div>
    );
  }
}

export default injectIntl(FilterBar);
