import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-div'>
      <div className='card-img-div'>
        <img className='card-img' src={props.imgLink} alt='img' />
      </div>
      <h1 className='card-heading'>{props.heading}</h1>
      <div className='card-data'>{props.data}</div>
    </div>
  );
};

export default Card;
