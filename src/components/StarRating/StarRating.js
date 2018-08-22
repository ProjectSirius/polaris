import React from 'react';
import { Rating, Responsive } from 'semantic-ui-react';

const RatingExampleSize = ({
  onRatingChange,
  isAuth,
  currentUser,
  classes,
}) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';
  return (
    <React.Fragment>
      <Responsive minWidth={768}>
        <Rating
          onRate={(e, obj) =>
            onRatingChange(
              dataType,
              '',
              { filterName: 'rating', value: obj.rating },
              obj.rating
            )
          }
          maxRating={5}
          defaultRating={1}
          icon="star"
          size="massive"
          className={classes.starWrapper}
        />
      </Responsive>
      <Responsive maxWidth={768}>
        <Rating
          onRate={(e, obj) =>
            onRatingChange(
              dataType,
              '',
              { filterName: 'rating', value: obj.rating },
              obj.rating
            )
          }
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
