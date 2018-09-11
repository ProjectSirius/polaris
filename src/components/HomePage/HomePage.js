import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ classes }) => {
  return (
    <div>
      <main className={classes.mainWrap}>
        <div className={classes.topSection}>
          <h1> Polaris </h1>
        </div>
        <div className={classes.textBlock}>
          <div className={classes.textBlockInner}>
            <h2>If you are a DJ</h2>
            <p>
              The Musician Marketplace gives you access to find talented
              Composers. See below for more information.
            </p>
          </div>
        </div>
        <div className={classes.blockTeaser}>
          <div className={classes.wrap}>
            <div className={classes.leftText}>
              <div className={classes.leftTextInner}>
                <h3>If you are a composer selling on the platform</h3>
                <p>
                  The Musician Marketplace gives talented musicians a platform
                  to share and make a living of their music, make music from
                  your own place regardless of their background or education.
                </p>
              </div>
            </div>
            <div className={classes.rightImg} />
          </div>
        </div>

        <div className={classes.yellowSection}>
          <h3>
            Design is not just what it looks like and feels like. Design is how
            it works.
          </h3>
          <p>— Steve Jobs</p>

          <div className={classes.yelloBg} />
        </div>
        <div className={classes.section5}>
          <div className={classes.wrapper}>
            <div className={classes.introduction}>
              <h2>How Polaris Works</h2>
              <p>A simple, secure process for Composers and DJs</p>
            </div>
            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}>1</div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>POST SAMPLES</h3>
                <p>of your music or channel so clients can hire you.</p>
              </div>
            </div>
            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}>2</div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>GET HIRED</h3>
                <p>
                  Your content or channel will be sold by the minute, views or
                  likes, based on the type of the product. Work remotely as a
                  composer or dj
                </p>
              </div>
            </div>
            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}>3</div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>
            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}>4</div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>Enjoy</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

HomePage.defaultProps = {
  title: 'Polaris',
};

export default HomePage;
