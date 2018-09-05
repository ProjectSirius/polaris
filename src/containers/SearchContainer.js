import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import {
  selectCurrentUser,
  selectIsAuth,
  selectIsRequesting,
} from '../selectors';

import search from '../actions/data';

import Search from '../components/Search';

class SearchContainer extends Component {
  handleSearch = searchValue => {
    const { search } = this.props;

    search(searchValue);
  };

  render() {
    const { isAuth, currentUser, isRequesting, intl: { formatMessage }} = this.props;
    return (
      <Search
        handleSearch={this.handleSearch}
        isAuth={isAuth}
        currentUser={currentUser}
        isRequesting={isRequesting}
        messages={messages}
        formatMessage={formatMessage}
      />
    );
  }
}

const messages = defineMessages({
  search: {
    id: 'search',
    defaultMessage: 'Search',
  }
});


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth,
  isRequesting: selectIsRequesting,
});

const mapDispatchToProps = dispatch => ({
  search: (dataType, query) => dispatch(search(dataType, query)),
});

const SearchContainerIntl = injectIntl(SearchContainer);

const SearchForm = reduxForm({
  form: 'Search_Form',
})(SearchContainerIntl);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
