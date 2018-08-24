import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ title, classes }) => {
  return (
    <div>
      <main className={classes.mainWrap}>
        <div className={classes.topSection}>
          {/*{title}*/}
          <h1> Better Together </h1>
        </div>

        <div className={classes.textBlock}>
          <div className={classes.textBlockInner}>
            <h2>
              Everyone deserves the chance <br />
              to live their best life
            </h2>
            <p>
              Serious fun—that’s the essence of MeBe’s proven approach to
              Applied Behavior Analysis (ABA), Speech and Language Pathology,
              and verbal behavior therapy. We integrate diagnostic rigor and
              research-based strategies with intense personal attention to
              assessing and celebrating your child’s individuality as well as
              your distinct family dynamics.
            </p>
          </div>
        </div>

        <div className={classes.blockTeaser}>
          <div className={classes.wrap}>
            <div className={classes.leftText}>
              <div className={classes.leftTextInner}>
                <h3>Wait and see is not an option</h3>
                <p>
                  At MeBe, we champion early intervention for a very simple
                  reason—it works. Research demonstrates that high-quality early
                  intervention therapy can give your child a much better start
                  in school and will likely result in much better outcomes
                  throughout adulthood.
                </p>
              </div>
            </div>
            <div className={classes.rightImg} />
          </div>
        </div>

        <div className={classes.yellowSection}>
          <h3>
            “Not every child who is nonverbal or exhibits
            <br />
            symptoms typically associated with autism
            <br />
            spectrum disorder (ASD) is at risk, and not every <br />
            child challenged by ASD exhibits all symptoms.”
          </h3>
          <p>— Abigail Bunt, MeBe Cofounder, Executive Director</p>
          <div className={classes.yelloBg} />
        </div>

        <div className={classes.section5}>
          <div className={classes.wrapper}>
            <div className={classes.introduction}>
              <h2>lorem Ispum </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos facere itaque nulla qui repellat voluptatibus.
              </p>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}> </div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}> </div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}> </div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}> </div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="section6" />
      <section className="section7" />
      <footer className="footer" />
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
