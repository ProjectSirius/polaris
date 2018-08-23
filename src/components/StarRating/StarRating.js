import React from 'react';
import { Rating, Responsive } from 'semantic-ui-react';

const RatingExampleSize = ({
  onRatingChange,
  updRating,
  value,
  classes,
  search,
}) => {
  return (
    <React.Fragment>
      <Responsive minWidth={768}>
        <Rating
          onRate={onRatingChange}
          maxRating={5}
          defaultRating={1}
          icon="star"
          size="massive"
          className={classes.starWrapper}
        />
      </Responsive>
      <Responsive maxWidth={768}>
        <Rating
          onRate={onRatingChange}
          maxRating={5}
          defaultRating={1}
          icon="star"
          size="huge"
          className={classes.starWrapper}
        />{' '}
      </Responsive>
    </React.Fragment>
  );
};

export default RatingExampleSize;
