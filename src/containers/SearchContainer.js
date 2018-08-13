import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser, selectIsAuth } from '../selectors';

import search from '../actions/data';

import Search from '../components/Search';

class SearchContainer extends Component {
  handleSearch = (dataType, query) => {
    const { search } = this.props;

    search(dataType, query);
  };

  render() {
    const { isAuth, currentUser } = this.props;

    return (
      <Search
        handleSearch={this.handleSearch}
        isAuth={isAuth}
        currentUser={currentUser}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth,
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
