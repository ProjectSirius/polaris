import React from 'react';
import { Field } from 'redux-form';

import RenderField from './RenderField';

const Search = ({
  classes,
  handleSearch,
  isRequesting,
  formatMessage,
  messages
}) => {
  return (
    <div className={classes.searchWrapper}>
      <Field
        name="search"
        component={RenderField}
        type="search"
        label="search"
        placeholder={`${formatMessage(messages.search)}...`}
        isRequesting={isRequesting}
        onChange={e => handleSearch(e.target.value)}
        classes={classes}
      />
    </div>
  );
};

export default Search;
