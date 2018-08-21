import React from 'react';
import { Rating } from 'semantic-ui-react';

const StarRating = ({ max, onChange, isAuth, currentUser, classes }) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';

  return (
    <div className={classes.rating}>
      <Rating
        icon="star"
        defaultRating={1}
        maxRating={max}
        size="massive"
        onRate={(e, { rating }) =>
          onChange(
            dataType,
            '',
            { filterName: 'rating', value: rating },
            rating
          )
        }
      />
    </div>
  );
};

export default StarRating;
