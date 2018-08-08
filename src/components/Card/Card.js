import React from 'react';
import {Col} from 'react-bootstrap';
import './style.css'

const Card = (props) => {
  return (
    <Col xs={12} md={4}>
      <div className='example-1 card'>
        <div className='wrapper'>
          <div className='date'>
            <span className='day'>props.day</span>
            <span className='month'>props.month</span>
            <span className='year'>props.year</span>
          </div>
          <div className='data'>
            <div className='content'>
              <span className='author'>props.author</span>
              <h1 className='title'><a href=''>props.title</a></h1>
              <p className='text'>The highly anticipated world championship fight will take place at 10am and is the
                second major boxing blockbuster in the nation after 43 years.</p>
              <label htmlFor='show-menu' className='menu-button'><span> </span></label>
            </div>
            <input type='checkbox' id='show-menu'/>
            <ul className='menu-content'>
              <li>
                <a href='' className='fa fa-bookmark-o'> </a>
              </li>
              <li><a href='' className='fa fa-heart-o'><span>47</span></a></li>
              <li><a href='' className='fa fa-comment-o'><span>8</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  )
};
export default Card