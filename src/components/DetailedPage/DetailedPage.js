import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  ButtonGroup,
  Button,
  Thumbnail,
  Image,
} from 'react-bootstrap';

const DetailedPage = ({ title, classes }) => {
  return (
    <Grid>
      <div className={classes.topButtons}>
        <Button bsSize="small" bsStyle="primary">
          Add
        </Button>
        <Button bsSize="small" bsStyle="warning">
          Edit
        </Button>
        <Button bsSize="small" bsStyle="danger">
          Delete
        </Button>
      </div>

      <Row className="show-grid">
        <Col
          xs={12}
          sm={5}
          md={8}
          className={`text-center ${classes.rightChannel}`}
        >
          <Thumbnail
            className={''}
            src="https://24tv.ua/resources/photos/news/610x344_DIR/201803/942790.jpg?201803034643"
            alt="channel"
          >
            <h1> {'Here is the Title 2'} </h1>
            <p className={classes.channelDescription}>
              Description: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Adipisci assumenda consequatur, eius enim est et
              exercitationem ipsam itaque laborum maiores numquam odit,
              perspiciatis quaerat sint tempore voluptate voluptatem.
              Distinctio, impedit.
            </p>
            <p>
              <Button bsStyle="primary">Button</Button>
              &nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>

        <Col xs={12} sm={7} md={4} className={classes.channelLeft}>
          <h2>
            <strong>
              PriceValue: <span>$</span>
              <span>1200</span>
            </strong>
          </h2>
          <Button bsStyle="primary" bsSize="large" className={classes.byButton}>
            <Glyphicon glyph="usd" /> <strong> By </strong>
          </Button>
          <div className={classes.userData}>
            <div>
              <Image src="https://harsupesa.am/images/catalog/dj/dj-smoke/dj-smoke-4.jpg" />
              <div>
                <Link to={``}> User: Jhone Done</Link>
                <Button> Contact </Button>
              </div>
            </div>
          </div>

          <h1> {'Here is the Title 1'} </h1>

          <div>
            <Button bsStyle="success">
              <Glyphicon glyph="time" /> Released: 2018-10-25
            </Button>
          </div>

          <ButtonGroup>
            <Button>
              <Glyphicon glyph="star" /> 5
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

          <div>
            <strong> Countries: </strong> - United States of America
          </div>
          <div className={classes.googlemap}>
            <Image src="https://maps.googleapis.com/maps/api/staticmap?center=3+Hakob+Hakobyan+St%2C+Yerevan+0033%2C+Armenia&zoom=12&size=400x228&scale=2&markers=color:red|3+Hakob+Hakobyan+St%2C+Yerevan+0033%2C+Armenia&key=AIzaSyDwsFdQ8rraJLTYf_GVMvHjORckgTa58HQ" />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
export default DetailedPage;
