import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import search from '../actions/data';
import { selectCurrentUser, selectIsAuth, selectOption } from '../selectors';

import SelectOptionFilter from '../components/SelectOptionFilter';

const SelectOptionFilterContainer = ({
  search,
  currentUser,
  isAuth,
  option,
}) => {
  const handleChange = (dataType, query, filter) => {
    search(dataType, query, filter);
  };

  return (
    <SelectOptionFilter
      handleChange={handleChange}
      currentUser={currentUser}
      isAuth={isAuth}
      option={option}
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
  option: selectOption,
});

const mapDispatchToProps = dispatch => ({
  search: (dataType, query, filter) =>
    dispatch(search(dataType, query, filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOptionFilterForm);
