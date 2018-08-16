import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const PriceRangeSlider = ({ classes, minPrice, maxPrice }) => {
  return (
    <div className={classes.priceSlider}>
      <Field
        name="min_price_range"
        min="0"
        max="100"
        step="1"
        type="range"
        className={classes.slider}
        component={RenderField}
        value={minPrice}
      />
      <Field
        name="max_price_range"
        min="0"
        max="100"
        step="1"
        type="range"
        className={classes.slider}
        component={RenderField}
        value={maxPrice}
      />
    </div>
  );
};

export default PriceRangeSlider;
