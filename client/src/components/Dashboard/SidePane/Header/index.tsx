import * as React from 'react';
import { Query } from 'react-apollo';
import getUser from './query';
import { User } from '../../Find/types';

interface UserType {
  user?: User
}

interface Data {
  data: UserType 
}

export default () => (
  // @ts-ignore
  <Query query={getUser}>
    {({data}: Data) => {
      const { user }: UserType = data
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
