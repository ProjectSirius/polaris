import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { data } from './data';
import Card from '../Card';

const CardList = () => {
  return (
    <Grid>
      <Row className="show-grid">
        {data.map(item => (
          <Col xs={12} sm={6} md={4} key={item.id}>
            <Card data={item} />
          </Col>
        ))}
      </Row>
    </Grid>
  );
};
export default CardList;
