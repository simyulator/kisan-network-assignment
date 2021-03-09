import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='footer-sections'>
        <h1>About us</h1>
        <ul className='footer-section-list'>
          <li>Who we are</li>
          <li>Resources</li>
          <li>Our priorities</li>
        </ul>
      </div>
      <div className='footer-sections'>
        <h1>Legal</h1>
        <ul className='footer-section-list'>
          <li>Documents</li>
          <li>Permissions</li>
          <li>Legalities</li>
        </ul>
      </div>
      <div className='footer-sections'>
        <h1>Developers</h1>
        <ul className='footer-section-list'>
          <li>Mark Z</li>
          <li>Simons Honeycutt</li>
          <li>Peek Samons</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
