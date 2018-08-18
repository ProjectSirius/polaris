import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const PriceRangeSlider = ({
  classes,
  minPrice,
  maxPrice,
  handleChange,
  isAuth,
  currentUser,
}) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';

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
        onChange={e =>
          handleChange(dataType, '', {
            filterName: 'minPrice',
            value: e.target.value,
          })
        }

      />
      <Field
        name="max_price_range"
        min="0"
        max="100"
        step="1"
        type="range"
        className={classes.slider}
        component={RenderField}
        onChange={e =>
          handleChange(dataType, '', {
            filterName: 'maxPrice',
            value: e.target.value,
          })
        }
      />
    </div>
  );
};

export default PriceRangeSlider;
