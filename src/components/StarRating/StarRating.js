import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingExampleSize = ({
  min,
  max,
  updRating,
  value,
  isAuth,
  currentUser,
  classes,
}) => {
  return (
    <Rating
      onRate={(e, obj) => updRating(obj.rating)}
      maxRating={5}
      defaultRating={1}
      icon="star"
      size="massive"
    />
  );
};

export default RatingExampleSize;
