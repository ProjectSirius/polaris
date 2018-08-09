import React from 'react';
import './style.css';

const Card = props => {
  const mappingData = mapData(props.data);
  return (
    <div className="card">
      <div
        className="wrapper"
        style={{ backgroundImage: 'url(' + mappingData.img + ')' }}
      >
        <div className="date">
          <span className="day">{mappingData.day}</span>
          <span className="month">{mappingData.month}</span>
          <span className="year">{mappingData.year}</span>
        </div>
        <div className="data">
          <div className="content">
            <span className="author"> {mappingData.author} </span>
            <h1 className="title">
              <a>{props.title}</a>
            </h1>
            <p className="text">{mappingData.text}</p>
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

function mapData(data) {
  return {
    author: data.author || '',
    day: data.day || '',
    month: data.month || '',
    year: data.year || '',
    title: data.title || '',
    img: data.img || data.noImg,
    text: data.text || '',
    id: data.id || '',
  };
}
