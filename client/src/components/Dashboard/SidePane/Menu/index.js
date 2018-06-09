import React from 'react';
import shortid from 'short-id';
import { NavLink } from 'react-router-dom';
import { MENU_CONTENTS } from './menuBtns.js';
import { LogOutIcon } from '../../../../assets/icons.js';

export const Menu = ({changeView}) => (
  <div className='menu'>
    { MENU_CONTENTS.map(btn => (
      <NavLink
        to={`/dashboard/${btn.name.toLowerCase()}`}
        className='btn-menu' 
        activeClassName='active'
        key={ shortid.generate() } >
        <div className='icon'>
          {btn.icon}
        </div>
        {btn.name}
      </NavLink>  
    )) } 
    <a
      href='/api/logout'
      className='btn-menu'>
      <div className='icon'>
        <LogOutIcon />
      </div>
      Log Out
    </a>  
  </div>
);