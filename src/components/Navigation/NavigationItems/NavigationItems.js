import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className='navigation-items'>
    <NavigationItem link='/' active='true'>
      {' '}
      HOME{' '}
    </NavigationItem>
    <NavigationItem link='/'> EXAMPLES </NavigationItem>
    <NavigationItem link='/'> CONTACT US </NavigationItem>
    <NavigationItem link='/'> FAQS </NavigationItem>
    <NavigationItem link='/'> ABOUT US </NavigationItem>
  </ul>
);

export default navigationItems;
