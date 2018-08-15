import React from 'react';

const range = (min, max) =>
  Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);

const RatingItem = props => {
  const { checked, colored, onChange, value, classes } = props;
  return (
    <label
      className={`${classes.ratingItem} ${
        colored ? `${classes.ratingItemSelected}` : ''
      }`}
    >
      <input
        checked={checked}
        className={classes.ratingInput}
        onChange={() => onChange(value)}
        type="radio"
        value={value}
      />
    </label>
  );
};

const StarRating = ({
  min,
  max,
  onChange,
  value,
  classes,
  isAuth,
  currentUser,
}) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';

  return (
    <div className={classes.rating}>
      {range(min, max).map((item, index) => (
        <RatingItem
          key={index}
          colored={value >= item}
          checked={value === item}
          value={item}
          onChange={() =>
            onChange(dataType, '', { filterName: 'rating', value: item }, item)
          }
          classes={classes}
        />
      ))}
    </div>
  );
};

export default StarRating;
