import React from 'react';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      request: false,
      loaded: false,
    }
  }

  handleSubmit = async values => {
    this.setState({ request: true });
    const { currentUser } = this.props;
    const res = await axios.post('/api/update_user', { currentUser, values});
    this.setState({
      success: res.status === 200 ? true : false,
      loaded: true
    })
  }

  render() {
    return this.props.currentUser && (
      <div className="overview">
        <div className="profile-card">
          <ProfileInfo
            info={this.props.currentUser[0]}
            onSubmit={this.handleSubmit} 
            handleImage={this.handleImage}
            updateProfile={this.updateProfile} 
            reqData={this.state}
            onSkillsChange={this.onSkillsChange} 
          /> 
        </div>
      </div> 
    )
  }
};

export default UserProfile;