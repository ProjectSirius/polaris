import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const PriceRangeSlider = ({ classes }) => {
  return (
    <div className={classes.priceSlider}>
      <Field
        name="min_price_range"
        min="0"
        max="100"
        step="0.5"
        type="range"
        className={classes.slider}
        component={RenderField}
      />
      <Field
        name="max_price_range"
        min="0"
        max="100"
        step="0.5"
        type="range"
        className={classes.slider}
        component={RenderField}
      />
    </div>
  );
};

export default PriceRangeSlider;
