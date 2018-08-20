import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const DetailedPage = ({
  title,
  classes,
  data,
  isRequesting,
  lang,
  handleEdit,
  userType,
  messages,
  formatMessage,
}) => {
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
            <h2>
              {userType === 'audience_owner'
                ? formatMessage(messages.channelTagsTitle)
                : formatMessage(messages.contentTagsTitle)}
            </h2>
            <div>
              {data.tags
                ? data.tags.map((tag, index) => (
                    <span key={index} className={classes.tag}>
                      {tag}
                    </span>
                  ))
                : ''}
            </div>
          </div>
          <div className={classes.tagsContainer}>
            <h2>{formatMessage(messages.averageRatingTitle)}</h2>
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
                <button onClick={handleEdit} className={classes.btn}>
                  {userType === 'audience_owner'
                    ? formatMessage(messages.editChannel)
                    : formatMessage(messages.editContent)}
                </button>
              </Link>
            ) : (
              <Link to={''}>
                <span>{formatMessage(messages.offerTitle)}</span>
              </Link>
            )}
          </div>
          {data.user_id === '1' ? (
            <div className={classes.offer}>
              <button
                className={classes.btn}
                style={{ borderColor: '#d9534f', color: '#d9534f' }}
              >
                {userType === 'audience_owner'
                  ? formatMessage(messages.deleteChannel)
                  : formatMessage(messages.deleteContent)}
              </button>
            </div>
          ) : (
            ''
          )}
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
              <h1 className={`text-center ${classes.title}`}>{data.title}</h1>
              <div className={classes.channelDescription}>
                <h2>{formatMessage(messages.briefDescriptionTitle)}</h2>
                <p> {data.briefDescription}</p>
              </div>
              <div className={classes.channelDescription}>
                <h2>{formatMessage(messages.detailedDescriptionTitle)}</h2>
                <p>{data.detailed_text}</p>
              </div>
              {userType === 'content_owner' ? (
                <div>
                  <h2 style={{ fontSize: '22px', textAlign: 'start' }}>
                    {formatMessage(messages.musicTitle)}
                  </h2>
                  <div className={classes.audioContainer}>
                    <audio controls loop={false} autoPlay={false}>
                      <source
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
                        type="audio/ogg"
                      />
                    </audio>
                  </div>
                </div>
              ) : (
                ''
              )}
              {userType === 'audience_owner' ? (
                <div className={classes.channelDescription}>
                  <h2>{formatMessage(messages.channelLinks)}</h2>
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
              ) : (
                ''
              )}
              <div className={classes.googlemap}>
                <div className={classes.location}>
                  <h4>{formatMessage(messages.locationTitle)}</h4>
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
