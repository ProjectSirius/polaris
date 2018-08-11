import React, { PureComponent } from 'react';
import {
  Panel,
  Glyphicon,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import StarRating from '../../containers/StarRating';
import PriceRangeSlider from '../../containers/PriceRangeSliderContainer';
import Search from '../../containers/SearchContainer';

class FilterBar extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Row className={classes.row}>
          <Col xs={6} md={3} className={classes.column}>
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
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={6} md={9} className={classes.column}>
            <Row className={`${classes.row} ${classes.searchRow}`}>
              <Col xs={8} md={10} lg={10} className={classes.column}>
                <Search />
              </Col>
              <Col xs={4} md={2} lg={2} className={classes.column}>
                <ListGroup className={classes.configurable}>
                  <ListGroupItem>
                    <Glyphicon glyph="th-large" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <Glyphicon glyph="th-list" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <Glyphicon glyph="map-marker" />
                  </ListGroupItem>
                </ListGroup>
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
