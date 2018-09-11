import React from 'react';
import {
  SearchIcon,
  ProfileIcon,
  MessagesIcon,
  DashboardIcon,
} from '../../../../assets/icons';

const MENU_CONTENTS = [
  { name: 'Dashboard', icon: <DashboardIcon /> },
  { name: 'Find', icon: <SearchIcon /> },
  { name: 'Messages', icon: <MessagesIcon /> },
  { name: 'Profile', icon: <ProfileIcon /> },
];

export default MENU_CONTENTS;
