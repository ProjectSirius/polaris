import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { getDetails, edit } from '../actions';

import {
  selectDetailed,
  selectIsRequesting,
  selectLanguage,
} from '../selectors';

import DetailedPage from '../components/DetailedPage';

const messages = defineMessages({
  title: {
    id: 'detailed-page-title',
    defaultMessage: 'Detailed Page',
  },
});

class ChannelDetailsContainer extends React.Component {
  componentDidMount() {
    const dataType = 'channels';
    const id = this.props.match.params.id;

    this.props.getDetails(dataType, id);
  }

  handleEdit = () => {
    this.props.edit();
  };

  render() {
    const {
      intl: { formatMessage },
      isRequesting,
      detailed,
      lang,
    } = this.props;

    const formattedTitle = formatMessage(messages.title);

    return (
      <DetailedPage
        title={formattedTitle}
        data={detailed}
        isRequesting={isRequesting}
        lang={lang}
        handleEdit={this.handleEdit}
        userType="audience_owner"
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  detailed: selectDetailed,
  isRequesting: selectIsRequesting,
  lang: selectLanguage,
});

ChannelDetailsContainer = injectIntl(ChannelDetailsContainer);

export default connect(
  mapStateToProps,
  {
    getDetails,
    edit,
  }
)(ChannelDetailsContainer);