import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  Button,
  Thumbnail,
  Image,
} from 'react-bootstrap';

const DetailedPage = ({ title, classes, detailed }) => {
  return (
    <Grid>
      <h1 className={`text-center ${classes.title}`}>{detailed.title}</h1>

      <Row className="show-grid">
        <Col
          xs={12}
          sm={5}
          md={8}
          className={`text-center ${classes.rightChannel}`}
        >
          <Thumbnail className={''} src={detailed.image} alt="channel">
            <p className={classes.channelText}>{detailed.detailedText}</p>
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
              <span>$</span>
              <span> {detailed.priceUnitId} </span> /
              <span>{detailed.priceValue}</span>
            </strong>
          </h2>
          <Button bsStyle="primary" bsSize="large" className={classes.byButton}>
            <Glyphicon glyph="usd" /> <strong> By </strong>
          </Button>
          <div className={classes.userData}>
            <div>
              <Image src={detailed.userPhoto} />
              <div>
                <Link to={``}> {detailed.user}</Link>
                <Button> Contact </Button>
              </div>
            </div>
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
          </div>
          <Button>
            <Glyphicon glyph="star" /> 5
          </Button>

          <h3>{detailed.description}</h3>

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
