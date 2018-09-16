import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  appName: {
    id: 'project-title',
    defaultMessage: 'Polaris',
  },
  messageForDj: {
    id: 'message-for-DJ',
    defaultMessage: 'If you are a DJ',
  },
  messageForDjExplain: {
    id: 'message-for-DJ-explain',
    defaultMessage:
      'The Musician Marketplace gives you access to find talented Composers. See below for more information.',
  },
  messageForComposer: {
    id: 'message-for-composer',
    defaultMessage: 'If you are a composer selling on the platform',
  },
  messageForComposerExplain: {
    id: 'message-for-composer-explain',
    defaultMessage:
      'The Polaris Marketplace gives talented musicians a platform to share and make a living of their music, make music from your own place regardless of their background or education.',
  },
  quote: {
    id: 'quote',
    defaultMessage:
      ' Design is not just what it looks like and feels like. Design is how it works.',
  },
  quoteAuthor: {
    id: 'quoteAuthor',
    defaultMessage: '— Steve Jobs',
  },
  howWorks: {
    id: 'how-works',
    defaultMessage: 'How Polaris Works',
  },
  howWorksExplain: {
    id: 'how-works-explain',
    defaultMessage: 'A simple, secure process for Composers and DJs',
  },
  stepOneTitle: {
    id: 'step-one-title',
    defaultMessage: 'POST SAMPLES',
  },
  stepOne: {
    id: 'step-one',
    defaultMessage: 'of your music or channel so clients can hire you.',
  },
  stepTwoTitle: {
    id: 'step-two-title',
    defaultMessage: 'GET HIRED',
  },
  stepTwo: {
    id: 'step-two',
    defaultMessage:
      'Your content or channel will be sold by the minute, views or\n' +
      '                  likes, based on the type of the product. Work remotely as a\n' +
      '                  composer or dj',
  },
  stepThreeTitle: {
    id: 'step-three-title',
    defaultMessage: 'A simple, secure process for Composers and DJs',
  },
  stepThree: {
    id: 'step-three',
    defaultMessage: 'A simple, secure process for Composers and DJs',
  },
  stepFourTitle: {
    id: 'step-four-title',
    defaultMessage: 'Enjoy',
  },
});

const HomePage = ({ classes, intl: { formatMessage } }) => {
  return (
    <div>
      <main className={classes.mainWrap}>
        <div className={classes.topSection}>
          <h1>{formatMessage(messages.appName)}</h1>
          <div className={classes.overlay}>{''}</div>
        </div>
        <div className={classes.textBlock}>
          <div className={classes.textBlockInner}>
            <h2>{formatMessage(messages.messageForDj)}</h2>
            <p>{formatMessage(messages.messageForDjExplain)}</p>
          </div>
        </div>
        <div className={classes.blockTeaser}>
          <div className={classes.wrap}>
            <div className={classes.leftText}>
              <div className={classes.leftTextInner}>
                <h3>{formatMessage(messages.messageForComposer)}</h3>
                <p>{formatMessage(messages.messageForComposerExplain)}</p>
              </div>
            </div>
            <div className={classes.rightImg} />
          </div>
        </div>

        <div className={classes.yellowSection}>
          <h3>{formatMessage(messages.quote)}</h3>
          <p>{formatMessage(messages.quoteAuthor)}</p>

          <div className={classes.yelloBg} />
        </div>
        <div className={classes.section5}>
          <div className={classes.wrapper}>
            <div className={classes.introduction}>
              <h2>{formatMessage(messages.howWorks)}</h2>
              <p>{formatMessage(messages.howWorksExplain)}</p>
            </div>
            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}>1</div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>{formatMessage(messages.stepOneTitle)}</h3>
                <p>{formatMessage(messages.stepOne)}</p>
              </div>
            </div>
            <div className={classes.teaser}>
              <div className={`teaser-Img ${classes.teaserImage}`}>2</div>
              <div className={`teaser-info ${classes.teaserCopy}`}>
                <h3>{formatMessage(messages.stepTwoTitle)}</h3>
                <p>{formatMessage(messages.stepTwo)}</p>
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
                <h3>{formatMessage(messages.stepFourTitle)}</h3>
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

export default injectIntl(HomePage);
