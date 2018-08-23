import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
  selectIsAuth,
  selectIsRequesting,
  selectSearch,
} from '../selectors';

import search from '../actions/data';

import Search from '../components/Search';

class SearchContainer extends Component {
  handleSearch = (dataType, query) => {
    const { search } = this.props;

    search(dataType, query);
  };

  render() {
    const { isAuth, currentUser, isRequesting, searchValue } = this.props;
    return (
      <Search
        searchValue={searchValue}
        handleSearch={this.handleSearch}
        isAuth={isAuth}
        currentUser={currentUser}
        isRequesting={isRequesting}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth,
  isRequesting: selectIsRequesting,
  searchValue: selectSearch,
});

const mapDispatchToProps = dispatch => ({
  search: (dataType, query) => dispatch(search(dataType, query)),
});

const SearchForm = reduxForm({
  form: 'Search_Form',
})(SearchContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
