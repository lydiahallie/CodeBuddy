import React from 'react';
import {
  SearchIcon, ProfileIcon, MessagesIcon, DashboardIcon,
} from '../../../../assets/icons.js';

export const MENU_CONTENTS = [
  { name: 'Dashboard', icon: <DashboardIcon /> },
  { name: 'Find', icon: <SearchIcon /> },
  { name: 'Messages', icon: <MessagesIcon /> },
  { name: 'Profile', icon: <ProfileIcon /> },
];
