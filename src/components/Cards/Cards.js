import React from 'react';

const Cards = ({ data, isRequesting }) => {
  return isRequesting ? <h2>Requesting</h2> : <div>Data</div>;
};

export default Cards;
