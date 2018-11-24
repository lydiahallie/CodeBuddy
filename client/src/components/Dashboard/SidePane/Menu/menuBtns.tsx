import * as React from 'react';
import { 
  SearchIcon, 
  ProfileIcon, 
  MessagesIcon, 
  DashboardIcon } from '../../../../assets/icons';

interface Content {
  name: string
  icon: any
}

const MENU_CONTENTS: Content[] = [
  { name: 'Dashboard', icon: <DashboardIcon /> },
  { name: 'Find', icon: <SearchIcon /> },
  { name: 'Messages', icon: <MessagesIcon /> },
  { name: 'Profile', icon: <ProfileIcon /> },
];

export default MENU_CONTENTS;
