import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const DetailedPage = ({ title, classes }) => {
  return (
    <Grid style={{ width: '100%', padding: '70px 31px 0' }}>
      <Row className="show-grid">
        <Col xs={12} sm={5} md={2} className={classes.channelLeft}>
          <div className={classes.userData}>
            <div>
              <Image src="https://harsupesa.am/images/catalog/dj/dj-smoke/dj-smoke-4.jpg" />
              <Link to={``}>
                <span>John Done</span>
              </Link>
            </div>
          </div>
          <div className={classes.price}>
            <span>$1200</span>
            <span className={classes.subPrice}>per 10 view</span>
          </div>
          <div className={classes.tagsContainer}>
            <h2>Channel Tags</h2>
            <div>
              <span>Jazz, </span>
              <span>Rock, </span>
              <span>Country, </span>
              <span>House</span>
            </div>
          </div>
          <div className={classes.tagsContainer}>
            <h2>Average Rating</h2>
            <div>Rating</div>
          </div>
          <div className={classes.offer}>
            <Link to={''}>
              <span>Make an offer</span>
            </Link>
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
              <Image
                src="http://auserwirth.info/wp-content/uploads/2018/03/anime-girl-dj-wallpaper-5-e-dj-anime-girl-wallpaper-hd-for-desktop-nightcore-anime.jpg"
                style={{ width: '100%', maxHeight: '590px' }}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={11}>
              <h1 className={`text-center ${classes.title}`}> Channel Title</h1>
              <div className={classes.channelDescription}>
                <h2>Brief Description:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci assumenda consequatur, eius enim est et
                  exercitationem ipsam itaque laborum maiores numquam odit.
                </p>
              </div>
              <div className={classes.channelDescription}>
                <h2>Detailed Description:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci assumenda consequatur, eius enim est et
                  exercitationem ipsam itaque laborum maiores numquam odit,
                  perspiciatis quaerat sint tempore voluptate voluptatem.
                  Distinctio, impedit.
                </p>
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
                <Image src="https://maps.googleapis.com/maps/api/staticmap?center=3+Hakob+Hakobyan+St%2C+Yerevan+0033%2C+Armenia&zoom=12&size=400x228&scale=2&markers=color:red|3+Hakob+Hakobyan+St%2C+Yerevan+0033%2C+Armenia&key=AIzaSyDwsFdQ8rraJLTYf_GVMvHjORckgTa58HQ" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};
export default DetailedPage;
