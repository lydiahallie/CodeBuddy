/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { Component } from 'react';
import { Mutation } from 'react-apollo';
import shortid from 'short-id';
import Skills from './Skills';
import { Spinner, Success } from '../../../assets/spinners';
import UpdateUser from './mutation';
// import { User } from '../Find/types';

const selectOpts: string[] = ['Male', 'Female', 'Other'];
const lower = (x: string) => x.toLowerCase();

const sortInputForms = x =>
  !(
    x === 'complete' ||
    x === 'img' ||
    x === 'skills' ||
    x === 'password' ||
    x === 'profile' ||
    x.startsWith('_')
  );


interface RequestMessageProps {
  request: boolean
  loaded: boolean
  success: boolean
}

const RequestMessage = ({ request, loaded, success }: RequestMessageProps) => (
  <span id="save-btn-span">
    {!request ? (
      'Save Changes'
    ) : request && !loaded ? (
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

interface ProfileInputFieldProps {
  field: string 
  currentUser: any
}

const ProfileInputField = ({ field, currentUser }: ProfileInputFieldProps) => (
  <div className="profile-span">
    <span id="profile-span-text">{field}</span>
    <div>
      {field === 'description' ? (
        <input type="textarea" value={field} max="120" placeholder={currentUser[field]} />
      ) : field === 'gender' ? (
        <select value={field}>
          {selectOpts.map(
            // eslint-disable-next-line comma-dangle
            (opt: string) => (
              <option key={shortid.generate()} value={lower(opt)}>
                {opt}
              </option>
            )
          )}
        </select>
      ) : (
        <input type="text" name={field} placeholder={currentUser[field]} />
      )}
    </div>
  </div>
);

interface ProfileInputFieldsProps {
  currentUser: any 
  profile: boolean
}

const ProfileInputFields = ({ currentUser, profile = false }: ProfileInputFieldsProps) => {
  let fields = Object.keys(profile ? currentUser.profile : currentUser);
  const user = profile ? currentUser.profile : currentUser;
  fields = fields.filter(x => sortInputForms(x));
  return fields.map(
    field => <ProfileInputField field={field} currentUser={user} key={shortid.generate()} />
  );
};

interface Props {
  reqData: RequestMessageProps
  user?: any
}

interface State {
  email: string 
  password: string
  firstName: string
  lastName: string 
  gender: string | null
}

type Key = 'email' | 'password' | 'firstName' | 'lastName' | 'gender'

export default class ProfileInfo extends Component<Props, State> {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: null,
  }

  // @ts-ignore
  handleInput = (key: Key, e) => this.setState({ [key]: e.target.value });
  
  render() {
    const { reqData, user } = this.props;
    // eslint-disable-next-line no-unused-vars
    // const { email, password, firstName, lastName, gender } = this.state;
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
                  // @ts-ignore
                  <ProfileInputFields currentUser={user} />
                  // @ts-ignore
                  <ProfileInputFields currentUser={user} profile />
                </div>
              </div>
            </div>
            // @ts-ignore
            <Skills skills={user.profile.skills} info={user} />
            <div className="save-btn">
              <button type="submit">
                <RequestMessage 
                  request={reqData.request} 
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
