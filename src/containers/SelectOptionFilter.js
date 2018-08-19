import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import search from '../actions/data';
import { setFilters } from '../actions/';

import { selectCurrentUser, selectIsAuth } from '../selectors';

import SelectOptionFilter from '../components/SelectOptionFilter';

const SelectOptionFilterContainer = ({
  search,
  currentUser,
  isAuth,
  setFilters,
}) => {
  const handleChange = (dataType, query, filter) => {
    setFilters(filter);
    search(dataType, query);
  };

  return (
    <SelectOptionFilter
      handleChange={handleChange}
      currentUser={currentUser}
      isAuth={isAuth}
    />
  );
};

const SelectOptionFilterForm = reduxForm({
  form: 'SelectOptionFilter_form',
  initialValues: {
    selectedOption: '',
  },
  destroyOnUnmount: false,
})(SelectOptionFilterContainer);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth,
});

const mapDispatchToProps = dispatch => ({
  search: (dataType, query, filter) =>
    dispatch(search(dataType, query, filter)),
  setFilters: filter => dispatch(setFilters(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOptionFilterForm);
