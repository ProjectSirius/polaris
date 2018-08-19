import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const DetailedPage = ({ title, classes, data, isRequesting, lang }) => {
  return isRequesting &&
    Object.keys(data).length === 0 &&
    data.constructor === Object ? (
    <h2>Loading...</h2>
  ) : (
    <Grid style={{ width: '100%', padding: '70px 31px 0' }}>
      <Row className="show-grid">
        <Col xs={12} sm={5} md={2} className={classes.channelLeft}>
          <div className={classes.userData}>
            <div>
              <Image src="https://harsupesa.am/images/catalog/dj/dj-smoke/dj-smoke-4.jpg" />
              <Link to={``}>
                <span>{data.user_id}</span>
              </Link>
            </div>
          </div>
          <div className={classes.price}>
            <span>${data.price}</span>
            <span className={classes.subPrice}>
              per {data.perUnit} {data.unit}
            </span>
          </div>
          <div className={classes.tagsContainer}>
            <h2>Channel Tags</h2>
            <div>
              {data.tags
                ? data.tags.map((tag, index) => <span key={index}>{tag}</span>)
                : ''}
            </div>
          </div>
          <div className={classes.tagsContainer}>
            <h2>Average Rating</h2>
            <div>Rating</div>
          </div>
          <div className={classes.offer}>
            {data.user_id === '1' ? (
              <Link
                to={{
                  pathname: `${window.location.pathname}/edit`,
                  search: `?locale=${lang}`,
                }}
              >
                <span>Edit Channel</span>
              </Link>
            ) : (
              <Link to={''}>
                <span>Make an offer</span>
              </Link>
            )}
          </div>
        </Col>
        <Col md={1} />
        <Col
          xs={12}
          sm={7}
          md={8}
          className={`text-center ${classes.rightChannel}`}
        >
          <Row>
            <Col xs={12} sm={12} md={12} lg={11}>
              {data.image ? (
                <Image
                  src={data.image}
                  style={{ width: '100%', maxHeight: '590px' }}
                />
              ) : (
                ''
              )}
            </Col>
            <Col xs={12} sm={12} md={12} lg={11}>
              <h1 className={`text-center ${classes.title}`}> Channel Title</h1>
              <div className={classes.channelDescription}>
                <h2>Brief Description:</h2>
                <p> {data.briefDescription}</p>
              </div>
              <div className={classes.channelDescription}>
                <h2>Detailed Description:</h2>
                <p>{data.detailed_text}</p>
              </div>
              <div className={classes.channelDescription}>
                <h2>Channel Links:</h2>
                <span>
                  Youtube channel:{' '}
                  <a
                    href="https://www.youtube.com/watch?v=cWGE9Gi0bB0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className={classes.link}>
                      https://www.youtube.com/watch?v=cWGE9Gi0bB0
                    </span>
                  </a>
                </span>
                <span>
                  Website:{' '}
                  <a
                    href="https://www.youtube.com/watch?v=cWGE9Gi0bB0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className={classes.link}>
                      https://www.youtube.com/watch?v=cWGE9Gi0bB0
                    </span>
                  </a>
                </span>
              </div>
              <div className={classes.googlemap}>
                <div className={classes.location}>
                  <h4> Location: </h4>
                  <span>3 Hakob Hakobyan, Yerevan, Armenia</span>
                </div>
                <Image src="https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};
export default DetailedPage;
