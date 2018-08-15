import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import { selectLanguage } from '../selectors';

import AuthButtons from '../components/AuthButtons';

const AuthButtonsContainer = ({ intl: { formatMessage }, lang }) => {
  return (
    <AuthButtons
      messages={messages}
      formatMessage={formatMessage}
      lang={lang}
    />
  );
};

const messages = defineMessages({
  audience: {
    id: 'audience',
    defaultMessage: 'Audience',
  },
  content: {
    id: 'content',
    defaultMessage: 'Content',
  },
  signUpMessage: {
    id: 'auth-buttons-sign-up',
    defaultMessage: 'Sign Up As a',
  },
});

const mapStateToProps = createStructuredSelector({
  lang: selectLanguage,
});

const AuthButtonsIntl = injectIntl(AuthButtonsContainer);

export default connect(
  mapStateToProps,
  null
)(AuthButtonsIntl);
