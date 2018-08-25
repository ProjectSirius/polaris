import React from 'react';
import { Link } from 'react-router-dom';
import { Loader, Grid, Image } from 'semantic-ui-react';

const DetailsPage = ({
  title,
  classes,
  data,
  isRequesting,
  lang,
  handleEdit,
  userType,
  messages,
  formatMessage,
  currentUser,
}) => {
  return isRequesting &&
    Object.keys(data).length === 0 &&
    data.constructor === Object ? (
    <Loader active inline="centered" size="large" className={classes.loading}>
      Loading
    </Loader>
  ) : (
    <Grid>
      <Grid.Row columns={16} style={{ margin: '0 35px' }}>
        <Grid.Column
          xs={12}
          sm={5}
          md={2}
          tablet={5}
          computer={3}
          mobile={16}
          className={classes.channelLeft}
        >
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
            {data.user_id === currentUser.id ? (
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
        </Grid.Column>
        <Grid.Column computer={1} tablet={1} />
        <Grid.Column
          computer={12}
          tablet={10}
          mobile={16}
          className={classes.rightChannel}
        >
          <Grid.Row>
            <Grid.Column>
              {data.image ? (
                <Image
                  src={data.image}
                  style={{ width: '100%', maxHeight: '590px' }}
                />
              ) : (
                ''
              )}
            </Grid.Column>
            <Grid.Column>
              <h1 className={classes.title}>{data.title}</h1>
              <div className={classes.channelDescription}>
                <h2>{formatMessage(messages.briefDescriptionTitle)}</h2>
                <p>{data.description}</p>
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
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default DetailsPage;
