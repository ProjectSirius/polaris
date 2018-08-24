import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

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
    const { isAuth, currentUser, isRequesting } = this.props;
    return (
      <Search
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
