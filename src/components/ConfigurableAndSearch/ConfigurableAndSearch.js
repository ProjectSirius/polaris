import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Search from '../../containers/SearchContainer';
import ConfigurableBtnsContainer from '../../containers/ConfigurableBtnsContainer';

const ConfigurableAndSearch = ({ classes }) => {
  return (
    <Col
      xs={8}
      md={9}
      lg={10}
      className={`${classes.column} ${classes['right-column']}`}
    >
      <Row className={classes.searchRow}>
        <Col xs={8} md={10} lg={10} className={classes.column}>
          <Search />
        </Col>
        <Col
          xs={4}
          md={2}
          lg={2}
          className={`${classes.column} ${classes.configCol}`}
        >
          <ConfigurableBtnsContainer />
        </Col>
      </Row>
    </Col>
  );
};

export default ConfigurableAndSearch;
