import React from 'react';
import { Query } from 'react-apollo';
import getUser from './query';

export default () => (
  <Query query={getUser}>
    {({data}) => {
      const { user } = data;
      return data ? (
        <div className="dash-header">
          <h1 id="dash-header-title">CodeBuddy</h1>
          <div className="dash-header-content">
            <div className="search-bar">
              <input type="text" />
            </div>
            <img id="header-img" src={user && user.profile.img} alt="" />
          </div>
        </div>
      ) : <div className="dash-header" />
    }}
  </Query>
);
