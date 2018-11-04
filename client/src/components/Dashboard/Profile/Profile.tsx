import * as React from 'react';
import { Query } from 'react-apollo';
import ProfileInfo from './ProfileInfo';
import getUserProfile from './query';
import { User } from '../Find/types';

interface State {
  success: boolean
  request: boolean
  loaded: boolean
}

interface Props {
  currentUser?: User
}

class UserProfile extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      request: false,
      loaded: false,
    };
  }

  // handleSubmit = async values => {
  //   this.setState({ request: true });
  //   const { currentUser } = this.props;
  //   const res = await axios.post('/api/update_user', { currentUser, values });
  //   this.setState({
  //     success: res.status === 200,
  //     loaded: true,
  //   });
  // };

  render() {
    const reqData = { ...this.state };
    // const { currentUser } = this.props;
    return (
      <Query query={getUserProfile}>
      {({data}) => (
        data.user ? (
          <div className="overview">
            <div className="profile-card">
              <ProfileInfo
                reqData={reqData}
                user={data.user} 
              />
            </div>
          </div>
        ) : <div className="overview" />
      )}
      </Query>
    );
  }
}

export default UserProfile;
