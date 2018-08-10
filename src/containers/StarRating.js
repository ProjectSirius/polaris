import React, { Component } from 'react';

import StarRating from '../components/StarRating';

class StarRatingContainer extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

  render() {
    return (
      <StarRating
        min={1}
        max={5}
        onChange={rating => this.setState({ rating })}
        value={this.state.rating}
      />
    );
  }
}

export default StarRatingContainer;
