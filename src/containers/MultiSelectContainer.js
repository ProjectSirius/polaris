import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectGenres, selectTags } from '../selectors';

import { getGenres, addTags, removeTags } from '../actions';

import MultiSelect from '../components/Multiselect/Multiselect';

class MultiSelectContainer extends Component {
  constructor() {
    super();

    this.state = {
      selectValue: [],
    };
  }

  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <MultiSelect
        genres={this.props.genres.map(genre => ({
          value: genre.el,
          label: genre.el,
          id: genre.id,
        }))}
        addTags={this.props.addTags}
        removeTags={this.props.removeTags}
        tags={this.props.tags}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  genres: selectGenres,
  tags: selectTags,
});

export default connect(
  mapStateToProps,
  {
    getGenres,
    addTags,
    removeTags,
  }
)(MultiSelectContainer);
