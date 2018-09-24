/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import shortid from 'short-id';
import PropTypes from 'prop-types';
import Skills from './Skills';
import { Spinner, Success } from '../../../assets/spinners';
import UpdateUser from './mutation';

const selectOpts = ['Male', 'Female', 'Other'];
const lower = x => x.toLowerCase();

const sortInputForms = x =>
  !(
    x === 'complete' ||
    x === 'img' ||
    x === 'skills' ||
    x === 'password' ||
    x === 'profile' ||
    x.startsWith('_')
  );

const RequestMessage = ({ req, loaded, success }) => (
  <span id="save-btn-span">
    {!req ? (
      'Save Changes'
    ) : req && !loaded ? (
      <React.Fragment>
        <Spinner />
        Updating...
      </React.Fragment>
    ) : success && loaded ? (
      <React.Fragment>
        <Success />
        Successfully updated!
      </React.Fragment>
    ) : (
      !success && loaded && 'Something went wrong..'
    )}
  </span>
);

const ProfileInputField = ({ field, currentUser }) => (
  <div className="profile-span">
    <span id="profile-span-text">{field}</span>
    <div>
      {field === 'description' ? (
        <input type="textarea" value={field} max="120" placeholder={currentUser[field]} />
      ) : field === 'gender' ? (
        <select value={field}>
          {selectOpts.map(
            // eslint-disable-next-line comma-dangle
            opt => (
              <option key={shortid.generate()} value={lower(opt)}>
                {opt}
              </option>
            )
          )}
        </select>
      ) : (
        <input type="text" name={field} placeholder={currentUser[field]} component="input" />
      )}
    </div>
  </div>
);

const ProfileInputFields = ({ currentUser, profile = false }) => {
  let fields = Object.keys(profile ? currentUser.profile : currentUser);
  const user = profile ? currentUser.profile : currentUser;
  fields = fields.filter(x => sortInputForms(x));
  return fields.map(
    // eslint-disable-next-line comma-dangle
    field => <ProfileInputField field={field} currentUser={user} key={shortid.generate()} />
  );
};

export default class ProfileInfo extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    email: '',
    // eslint-disable-next-line react/no-unused-state
    password: '',
    // eslint-disable-next-line react/no-unused-state
    firstName: '',
    // eslint-disable-next-line react/no-unused-state
    lastName: '',
    // eslint-disable-next-line react/no-unused-state
    gender: null,
  }

  handleInput = (key, e) => this.setState({ [key]: e.target.value });
  
  render() {
    const { reqData, user } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { email, password, firstName, lastName, gender } = this.state;
    return user ? (
      <Mutation mutation={UpdateUser}>
        {updateUser => (
          <form 
            onSubmit={e => {
              e.preventDefault();
              updateUser({ variables: this.state });
            }}
            className="profile-user-info-wrapper"
          >
            <div className="profile-user-info-input">
              <div className="profile-user-img">
                <img src={user.profile.img} alt={user.firstName} />
                <span>image URL</span>
                <input type="text" />
              </div>
              <div className="profile-user-info">
                <div className="profile-fields">
                  <ProfileInputFields currentUser={user} />
                  <ProfileInputFields currentUser={user} profile />
                </div>
              </div>
            </div>
            <Skills skills={user.profile.skills} info={user} />
            <div className="save-btn">
              <button type="submit">
                <RequestMessage 
                  req={reqData.request} 
                  loaded={reqData.loaded} 
                  success={reqData.success} 
                />
              </button>
            </div>
          </form>
        )}
      </Mutation>
    ) : null;
  }
}

ProfileInfo.propTypes = {
  reqData: PropTypes.bool.isRequired,
  user: PropTypes.shape.isRequired,
}

RequestMessage.propTypes = {
  req: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

ProfileInputField.propTypes = {
  field: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};
