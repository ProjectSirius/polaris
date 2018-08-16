import React from 'react';
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  ButtonGroup,
  Button,
  Image,
} from 'react-bootstrap';

const DetailedPage = ({ title, classes }) => {
  return (
    <Grid>
      <Row className={'show-grid user-data'}>
        <Col xs={12} sm={6} md={6} className={classes.userData}>
          <Image
            src="https://harsupesa.am/images/catalog/dj/dj-smoke/dj-smoke-4.jpg"
            circle
          />
          <h2>Jhone Done</h2>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={6}
          className={`text-md-right ${classes.changeChannel}`}
        >
          <Button bsStyle="info">Add</Button>
          <Button bsStyle="warning">Edit</Button>
          <Button bsStyle="danger">Delete</Button>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} sm={5} md={4} className={'text-center'}>
          <Image
            src="https://static1.squarespace.com/static/586d6991e6f2e1b4e1983a61/t/5876b44215d5dbddbdab47ba/1484174407086/"
            className={`img-fluid ${classes.chanelImg}`}
          />
          <div>
            <Button bsStyle="success">
              <Glyphicon glyph="time" /> Released: 2018-04-25
            </Button>
          </div>
        </Col>
        <Col xs={12} sm={7} md={6} className={classes.channelInfo}>
          <h1> {'Here is the Title '} </h1>
          <ButtonGroup>
            <Button bsStyle="warning">
              <Glyphicon glyph="star" /> Star
            </Button>
            <Button>
              <Glyphicon glyph="heart-empty" /> 17
            </Button>
            <Button>
              <Glyphicon glyph="comment" /> 32
            </Button>
            <Button>
              <Glyphicon glyph="eye-open" /> 500
            </Button>
          </ButtonGroup>
          <h3>Description orem ipsum dolor sit amet</h3>
          <ul className={classes.infoList}>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
          </ul>
          <p className={'text'}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              assumenda consequatur, eius enim est et exercitationem ipsam
              itaque laborum maiores numquam odit, perspiciatis quaerat sint
              tempore voluptate voluptatem. Distinctio, impedit.
            </span>
          </p>
          <div>
            <strong> Countries: </strong> - United States of America
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default DetailedPage;
