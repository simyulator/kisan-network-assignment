import React from 'react';
import './SubMenu.css';

const SubMenu = (props) => {
  return (
    <div className='submenu'>
      <div className='submenu-heading'>Submenu</div>
      <ul className='submenu-list'>
        <li>
          <div className='list-item'>Home</div>
        </li>
        <li>
          <div className='list-item'>Examples</div>
        </li>
        <li>
          <div className='list-item'>Contact</div>
        </li>
        <li>
          <div className='list-item'>About</div>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
