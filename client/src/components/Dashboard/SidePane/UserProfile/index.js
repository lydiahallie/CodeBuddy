import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../../actions';

class Profile extends React.Component {
  
  render() {
    const { currentUser } = this.props;
    const currentUser = currentUser.profile || currentUser
    return (
      <div className='profile'>
        <div className='user-img'>
          <img src={currentUser.profile.img} alt='user' />
        </div>
        <div className='user-info'>
          <h3>{currentUser.firstName} {currentUser.lastName}</h3>
          <h5>{currentUser.profile.title || 'A Crazy Developer'}</h5>
        </div>
      </div>
    )   
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

export const UserProfile =  connect(mapStateToProps, {fetchUser})(Profile);