import React, { PureComponent } from 'react';
import { Panel, Glyphicon, Row, Col } from 'react-bootstrap';

import StarRating from '../../containers/StarRating';
import PriceRangeSlider from '../../containers/PriceRangeSliderContainer';
import Search from '../../containers/SearchContainer';
import CheckboxFilter from '../../containers/CheckboxFilter';

class FilterBar extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Row className={classes.row}>
          <Col xs={4} md={3} className={classes.column}>
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
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={8} md={9} className={classes.column}>
            <Row className={`${classes.row} ${classes.searchRow}`}>
              <Col xs={8} md={10} lg={10} className={classes.column}>
                <Search />
              </Col>
              <Col
                xs={4}
                md={2}
                lg={2}
                className={`${classes.column} ${classes.configCol}`}
              >
                <ul className={classes.configurable}>
                  <li className={classes.listItem}>
                    <Glyphicon glyph="th-large" />
                  </li>
                  <li className={classes.listItem}>
                    <Glyphicon glyph="th-list" />
                  </li>
                  <li className={classes.listItem}>
                    <Glyphicon glyph="map-marker" />
                  </li>
                </ul>
              </Col>
            </Row>
            <Row
              className={classes.row}
              style={{
                height: '551px',
                background: 'tan',
              }}
            >
              <div>Content</div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FilterBar;
