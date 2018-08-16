import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const range = (min, max) =>
  Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);

const StarRating = ({ min, max, onChange, value, classes }) => {
  return (
    <div className={classes.rating}>
      {range(min, max).map((item, index) => (
        <div
          className={item <= value ? classes.rateStar : classes.defaultStar}
          onClick={() => onChange(index + 1)}
        >
          <Glyphicon glyph="glyphicon glyphicon-star" />
        </div>
      ))}
    </div>
  );
};
export default StarRating;
