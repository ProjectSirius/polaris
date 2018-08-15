import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser, selectIsAuth } from '../selectors';

import search from '../actions/data';

import CheckboxFilter from '../components/CheckboxFilter';

const CheckboxFilterContainer = ({ currentUser, isAuth }) => {
  const handleChange = (dataType, query, filter) => {
    search(dataType, query, filter);
  };
  return (
    <CheckboxFilter
      handleChange={handleChange}
      currentUser={currentUser}
      isAuth={isAuth}
    />
  );
};

const CheckboxFilterForm = reduxForm({
  form: 'CheckboxFilter_form',
  initialValues: {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  },
  destroyOnUnmount: false,
})(CheckboxFilterContainer);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth,
});

const mapDispatchToProps = dispatch => ({
  search: (dataType, query, filter) =>
    dispatch(search(dataType, query, filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxFilterForm);
