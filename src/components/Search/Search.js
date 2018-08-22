import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const Search = ({ classes, handleSearch, isRequesting }) => {
  return (
    <div className={classes.searchWrapper}>
      <Field
        name="search"
        component={RenderField}
        type="search"
        label="search"
        placeholder="Search..."
        isRequesting={isRequesting}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
