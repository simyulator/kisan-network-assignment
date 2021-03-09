import React from 'react';
import './WideCard.css';

const WideCard = (props) => {
  return (
    <div className='wide-card'>
      <div className='wide-img-div'>
        <img src={props.imgLink} alt='img' />
      </div>
      <div className='wide-data-div'>
        <h1 className='wide-heading'>{props.heading}</h1>
        <p>{props.data}</p>
      </div>
    </div>
  );
};

export default WideCard;
