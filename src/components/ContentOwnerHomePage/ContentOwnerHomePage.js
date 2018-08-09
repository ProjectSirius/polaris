import React from 'react';
import ViewBtnGroup from '../View-btn-group'
import FilterBar from '../filter-bar';

import './styles.css';

const ContentOwnerHomePage = props => {
  return (
    <div>
      <p>Content Owner Home Page</p> 
      <FilterBar />
      <ViewBtnGroup/>
    </div>
  );
};

export default ContentOwnerHomePage;
