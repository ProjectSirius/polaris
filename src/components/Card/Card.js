import React from 'react';
import './style.css';

const Card = props => {
  const mappingData = props.data;
  return (
    <div className="card">
      <div
        className="wrapper"
        style={{
          backgroundImage:
            'url(' +
            (mappingData.img ? mappingData.img : mappingData.noImg) +
            ')',
        }}
      >
        <div className="date">
          <span className="day">{mappingData.day ? mappingData.day : ''}</span>
          <span className="month">
            {mappingData.month ? mappingData.month : ''}
          </span>
          <span className="year">
            {mappingData.year ? mappingData.year : ''}
          </span>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">
              {mappingData.author ? mappingData.author : ''}
            </span>
            <h1 className="title">
              <a>{props.title}</a>
            </h1>
            <p className="text">{mappingData.text ? mappingData.text : ''}</p>
            <label htmlFor={mappingData.id} className="menu-button">
              <span> </span>
            </label>
          </div>
          <input type="checkbox" id={mappingData.id} />
          <ul className="menu-content">
            <li>
              <a className="fa fa-bookmark-o"> </a>
            </li>
            <li>
              <a className="fa fa-heart-o">
                <span>47</span>
              </a>
            </li>
            <li>
              <a className="fa fa-comment-o">
                <span>8</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
