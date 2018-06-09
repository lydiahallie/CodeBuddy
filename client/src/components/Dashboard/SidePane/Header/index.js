import React from 'react';
import { MessagesIcon, EventsIcon } from '../../../../assets/icons.js';
import { connect } from 'react-redux';

export const DashHeaderContent = ({currentUser}) => (
  currentUser !== undefined &&
  <div className='dash-header'>
    <h1 id='dash-header-title'>CodeBuddy</h1>
    <div className='dash-header-content'>
      <div className='search-bar'>
        <input type='text' />
      </div>
      <MessagesIcon />
      <EventsIcon />
      <p>{currentUser.profile.userName}</p>
      <img id='header-img' src={currentUser.profile.img} alt='' />
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    currentUser: state.user[0]
  }
}

export const DashHeader = connect(mapStateToProps)(DashHeaderContent)