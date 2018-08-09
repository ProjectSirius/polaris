import React from 'react';
import ViewBtnGroup from '../ViewBtnGroup';
import FilterBar from '../FilterBar';

import './styles.css';

const ContentOwnerHomePage = props => {
  return (
    <div>
      <p>Content Owner Home Page</p>
      <FilterBar />
      <ViewBtnGroup />
    </div>
  );
};

export default ContentOwnerHomePage;
