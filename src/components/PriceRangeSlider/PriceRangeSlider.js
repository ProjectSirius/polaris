import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const PriceRangeSlider = ({ classes }) => {
  return (
    <div className={classes.sliderContainer}>
      <Field
        name="price_range"
        type="range"
        min="1"
        max="100"
        value="50"
        className={classes.slider}
        component={RenderField}
      />
    </div>
  );
};

export default PriceRangeSlider;
