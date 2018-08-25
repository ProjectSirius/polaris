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

          <div className={classes.leftRight}>
            <div className={classes.leftRightInner}>
              <h3>
                At any age, possible
                <br />
                red flags for screening include
                <br />
              </h3>

              <div class={classes.leftRightList}>
                <ul>
                  <li>Persistently nonverbal.</li>
                  <li>Delayed language development.</li>
                  <li>Constant repetition of words or phrases.</li>
                  <li>Avoiding eye contact.</li>
                  <li>Preference for being alone.</li>
                  <li>Highly restricted interests.</li>
                  <li>Struggling to understand the feelings of others.</li>
                  <li>Upset by minor changes in surroundings or routine.</li>
                  <li>
                    Unusual and frequently intense reactions to lights, colors,
                    sounds, smells, tastes, or textures.
                  </li>
                  <li>
                    Repetitive behaviors such as rocking, flapping, or spinning.
                  </li>
                </ul>

                <p>
                  Your child’s loss of any previously acquired skills—speech,
                  babbling, or social interactions—is also a reason to seek
                  medical screening for ASD.
                </p>
                <p>
                  <a href="http://mebefamily.com/services/speech/">
                    Learn the signs of a speech or language disorder.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className={classes.callToAction}>
        <div className={classes.callWrap}>
          <div className={classes.col}>
            <h4>Designed for your child</h4>
            <p>
              Our collaboration with you begins with conversation and in-home
              assessment.
            </p>
            <a href="https://mebefamily.com/contact/" className="button">
              Let's Talk
            </a>
          </div>

          <div className={classes.col}>
            <h4>Closing the gap</h4>
            <p>
              The sooner you seek help, the better the long-term outcomes are
              likely to be.
            </p>
            <a href="https://mebefamily.com/services/" className="button">
              Start Now
            </a>
          </div>

          <div className={classes.col}>
            <h4>Help with paperwork</h4>
            <p>
              We help expedite the insurance process to get your child started
              as soon as possible.
            </p>
            <a
              href="https://mebefamily.com/getting-started/insurance/"
              className="button"
            >
              Paperwork &amp; Insurance
            </a>
          </div>
        </div>
      </section>
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
