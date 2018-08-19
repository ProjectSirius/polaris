import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { getDetails } from '../actions';

import { selectDetailed, selectIsRequesting } from '../selectors';

import DetailedPage from '../components/DetailedPage';

const messages = defineMessages({
  title: {
    id: 'detailed-page-title',
    defaultMessage: 'Detailed Page',
  },
});

class DetailedPageContainer extends React.Component {
  componentDidMount() {
    const dataType = 'channels';

    this.props.getDetails(dataType, '1');
  }

  render() {
    const {
      intl: { formatMessage },
      isRequesting,
      detailed,
    } = this.props;

    const formattedTitle = formatMessage(messages.title);

    return (
      <DetailedPage
        title={formattedTitle}
        data={detailed}
        isRequesting={isRequesting}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  detailed: selectDetailed,
  isRequesting: selectIsRequesting,
});

DetailedPageContainer = injectIntl(DetailedPageContainer);

export default connect(
  mapStateToProps,
  {
    getDetails,
  }
)(DetailedPageContainer);
