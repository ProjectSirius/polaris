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
            <h2>
              Lorem ipsum dolor sit <br />
              maiores molestiae, repudiandae unde.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              corporis cum esse expedita libero maiores, necessitatibus quae
              quas quos tenetur veniam, voluptatum? Accusamus eveniet facilis
              inventore maiores molestiae, repudiandae unde. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Animi corporis cum esse
              necessitatibus quae quas quos tenetur veniam, voluptatum?
              Accusamus eveniet facilis.
            </p>
          </div>
        </div>

        <div className={classes.blockTeaser}>
          <div className={classes.wrap}>
            <div className={classes.leftText}>
              <div className={classes.leftTextInner}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi corporis cum esse expedita libero maiores,
                  necessitatibus quae quas quos tenetur veniam, voluptatum?
                  Accusamus eveniet facilis inventore maiores molestiae,
                  repudiandae unde. Accusamus eveniet facilis inventore maiores
                  molestiae, repudiandae unde. Accusamus eveniet facilis
                  inventore maiores molestiae, repudiandae unde.
                </p>
              </div>
            </div>
            <div className={classes.rightImg} />
          </div>
        </div>

        <div className={classes.yellowSection}>
          <h3>
            “Lorem ipsum dolor sit amet, consectetur
            <br />
            symptoms typically associated with autism
            <br />
            inventore maiores molestiae, repudiandae unde. <br />
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
              <div className={`teaser-Img ${classes.teaserImage}`} />
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`} />
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`} />
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>lorem Ispum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos facere itaque nulla qui repellat voluptatibus.
                </p>
              </div>
            </div>

            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`} />
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
                Lorem ipsum dolor sit
                <br />
                inventore maiores molestiae, repudiandae.
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
                  <a>Learn the signs of a speech or language disorder.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className={classes.callToAction}>
        <div className={classes.callWrap}>
          <div className={classes.colA}>
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos facere itaque nulla qui repellat voluptatibus.{' '}
            </p>
            <a className="button">Lorem ipsum</a>
          </div>

          <div className={classes.colA}>
            <h4>Lorem ipsum ..</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos facere itaque nulla qui repellat voluptatibus.
            </p>
            <a className="button">Lorem ipsum</a>
          </div>

          <div className={classes.colA}>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos facere itaque nulla qui repellat voluptatibus.
            </p>
            <a className="button">Paperwork &amp; Insurance</a>
          </div>
        </div>
      </section>
      <footer className={classes.mainFooter}>
        <div className={classes.fwrap}>
          <div className={classes.footerBrand}>
            <h3>
              Lorem ipsum dolor <br />
              ignissimos facere itaque <br />
              their best life
            </h3>
          </div>

          <nav className={classes.footerNav}>
            <div className={classes.col}>
              <h4>MeBe</h4>
              <ul>
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Locations</a>
                </li>
              </ul>
            </div>

            <div className={classes.col}>
              <h4>Getting Started</h4>
              <ul>
                <li>
                  <a>Getting Started</a>
                </li>
                <li>
                  <a>Access Services</a>
                </li>
                <li>
                  <a>Insurance</a>
                </li>
              </ul>
            </div>

            <div className={classes.col}>
              <h4>Services</h4>
              <ul>
                <li>
                  <a>Our Approach</a>
                </li>
                <li>
                  <a>Early Intervention</a>
                </li>
                <li>
                  <a>Social Skills</a>
                </li>
                <li>
                  <a>Speech</a>
                </li>
                <li>
                  <a>School Services</a>
                </li>
              </ul>
            </div>

            <div className={classes.col}>
              <h4>About</h4>
              <ul>
                <li>
                  <a>Our Story</a>
                </li>
                <li>
                  <a>Our People</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
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
