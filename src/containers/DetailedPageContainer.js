import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

import DetailedPage from '../components/DetailedPage';
import { getDetailed } from '../actions';
import { createStructuredSelector } from 'reselect';

import { selectDetailed } from '../selectors';

const messages = defineMessages({
  title: {
    id: 'detailed-page-title',
    defaultMessage: 'Detailed Page',
  },
});

class DetailedPageContainer extends React.Component {
  componentDidMount() {
    const dataType = 'channel';

    this.props.getDetailed(dataType, '56c782f18990ecf954f6e027');
  }

  render() {
    const { detailed } = this.props;
    const {
      intl: { formatMessage },
    } = this.props;

    const formattedTitle = formatMessage(messages.title);

    return <DetailedPage title={formattedTitle} detailed={detailed} />;
  }
}

const mapDispatchToProps = dispatch => ({
  getDetailed: (dataType, id) => dispatch(getDetailed(dataType, id)),
});
const mapStateToProps = createStructuredSelector({
  detailed: selectDetailed,
});

DetailedPageContainer = injectIntl(DetailedPageContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedPageContainer);
