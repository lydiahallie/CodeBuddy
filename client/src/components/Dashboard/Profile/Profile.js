import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProfileInfo from './ProfileInfo';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      success: false,
      request: false,
      loaded: false,
    };
  }

  handleSubmit = async values => {
    this.setState({ request: true });
    const { currentUser } = this.props;
    const res = await axios.post('/api/update_user', { currentUser, values });
    this.setState({
      success: res.status === 200,
      loaded: true,
    });
  };

  render() {
    const reqData = { ...this.state };
    const { currentUser } = this.props;
    return (
      currentUser && (
        <div className="overview">
          <div className="profile-card">
            <ProfileInfo
              info={currentUser[0]}
              onSubmit={this.handleSubmit}
              handleImage={this.handleImage}
              updateProfile={this.updateProfile}
              reqData={reqData}
              onSkillsChange={this.onSkillsChange}
            />
          </div>
        </div>
      )
    );
  }
}

export default UserProfile;

UserProfile.propTypes = {
  currentUser: PropTypes.shape({
    profile: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.bool.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          lang: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
          // eslint-disable-next-line comma-dangle
        })
      ).isRequired,
      level: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    __v: PropTypes.number,
  }).isRequired,
};
