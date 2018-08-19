import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const Search = ({ classes, handleSearch, currentUser, isAuth }) => {
  const dataType = isAuth
    ? currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents'
    : '';

  return (
    <div className={classes.searchWrapper}>
      <Field
        name="search"
        component={RenderField}
        type="search"
        label="search"
        placeholder="Search..."
        onChange={e => handleSearch(dataType, e.target.value)}
      />
    </div>
  );
};

export default Search;
