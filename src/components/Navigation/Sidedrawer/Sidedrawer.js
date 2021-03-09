import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
  let attachedClasses = ['side-drawer', 'close'];

  if (props.open) {
    attachedClasses = ['side-drawer', 'open'];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sidedrawer;
