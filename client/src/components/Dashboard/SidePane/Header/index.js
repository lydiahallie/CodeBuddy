import React from 'react';

const DashHeaderContent = ({ currentUser }) =>
  currentUser !== undefined && (
    <div className="dash-header">
      <h1 id="dash-header-title">CodeBuddy</h1>
      <div className="dash-header-content">
        <div className="search-bar">
          <input type="text" />
        </div>
        <img
          id="header-img"
          src={currentUser.profile && currentUser.profile.img}
          alt=""
        />
      </div>
    </div>
  );

export default DashHeaderContent;
