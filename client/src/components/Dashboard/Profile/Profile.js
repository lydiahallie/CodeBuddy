import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ProfileInfo } from './ProfileInfo';
import { fetchUser } from '../../../actions';

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
    this.setState({request: true});
    const { currentUser } = this.props;
    const res = await axios.post('/api/update_user', { currentUser, values});
    this.setState({
      success: res.status === 200 ? true : false,
      loaded: true
    })
  }

  render() {
    return (
      <div className='overview'>
        <div className='profile-card'>
          <ProfileInfo
            info={ this.props.currentUser[0] }
            onSubmit={ this.handleSubmit } 
            handleImage={ this.handleImage }
            updateProfile={ this.updateProfile } 
            reqData={ this.state }
            onSkillsChange={ this.onSkillsChange } /> 
        </div>
      </div> 
    )
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);