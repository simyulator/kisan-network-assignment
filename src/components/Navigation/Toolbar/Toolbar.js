import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';
import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => {
  return (
    <header className='toolbar'>
      <Logo />
      <nav className='desktop-only'>
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  );
};

export default toolbar;
