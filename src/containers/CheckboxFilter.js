import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
  selectIsAuth,
  selectGenres,
  selectError,
} from '../selectors';

import { getData as search, getGenres, toggleGenre } from '../actions';

import CheckboxFilter from '../components/CheckboxFilter';

class CheckboxFilterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getGenres();
  }

  handleChange(id, bool) {
    this.props.toggleGenre(id, bool, this.props.genres);
    this.props.search('', 1, 'search');
  }

  render() {
    const { currentUser, isAuth, genres } = this.props;

    if (!genres.length) {
      return <strong>Sorry, something went wrong!</strong>;
    }

    return (
      <CheckboxFilter
        handleChange={this.handleChange}
        currentUser={currentUser}
        isAuth={isAuth}
        genres={genres}
      />
    );
  }
}

const CheckboxFilterForm = reduxForm({
  form: 'CheckboxFilter_form',
  destroyOnUnmount: false,
})(CheckboxFilterContainer);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isAuth: selectIsAuth,
  genres: selectGenres,
  checkBoxError: selectError,
});

export default connect(
  mapStateToProps,
  {
    search,
    getGenres,
    toggleGenre,
  }
)(CheckboxFilterForm);
