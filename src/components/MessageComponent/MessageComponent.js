import React from 'react';
import './MessageComponent.css';

const MessageComponent = (props) => {
  return (
    <div className='message-component'>
      <section className='first-section'>
        <div>
          <img src={props.coverImageLink} alt='' />
          <img src={props.profileImageLink} alt='' />
        </div>
        <div className='contact-details-div'>
          <div>
            <b>Name</b> : Nomen Nescio
          </div>
          <div>
            <b>Email</b> : nomen@example.com
          </div>
          <div>
            <b>Phone</b> : +852 555 555
          </div>
        </div>
      </section>
      <section className='second-section'>
        <div className='section-heading'>Send me a message</div>
        <label className='message-input-label'>Subject</label>
        <input type='text' className='message-input' />
        <label className='message-input-label'>Message</label>
        <textarea type='text' className='message-area' />
        <button className='send-button'>Send</button>
      </section>
      <section>
        <div className='section-heading'>Or meet me at the office</div>
        <div className='third-section'>
          <img src='https://openmaptiles.org/img/home-banner-map.png' alt='' />
          <div className='address-div'>
            ONE MIDTOWN
            <br />
            11 Hoi Shing Rd <br />
            Tsuen Wan
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessageComponent;
