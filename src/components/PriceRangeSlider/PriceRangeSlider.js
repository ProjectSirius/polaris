import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const PriceRangeSlider = ({
  classes,
  minPrice,
  maxPrice,
  handleChange,
}) => {
  let min, max;

  if (+minPrice > +maxPrice) {
    max = +minPrice;
    min = +maxPrice;
  } else {
    min = +minPrice;
    max = +maxPrice;
  }

  return (
    <div>
      <div className={classes.priceSlider}>
        <Field
          name="min_price_range"
          min="1"
          max="10000"
          step="1"
          type="range"
          className={classes.slider}
          component={RenderField}
          onChange={() => handleChange()}
        />
        <Field
          name="max_price_range"
          min="1"
          max="10000"
          step="1"
          type="range"
          className={classes.slider}
          component={RenderField}
          onChange={() => handleChange()}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>${min}</div>
        <div>${max}</div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
