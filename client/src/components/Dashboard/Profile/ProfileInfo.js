/* eslint-disable no-nested-ternary */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import shortid from 'short-id';
import PropTypes from 'prop-types';
import Skills from './Skills';
import { Spinner, Success } from '../../../assets/spinners';

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
        <Field component="textarea" name={field} max="120" placeholder={currentUser[field]} />
      ) : field === 'gender' ? (
        <Field component="select" name={field}>
          {selectOpts.map(
            // eslint-disable-next-line comma-dangle
            opt => (
              <option key={shortid.generate()} value={lower(opt)}>
                {opt}
              </option>
            )
          )}
        </Field>
      ) : (
        <Field type="text" name={field} placeholder={currentUser[field]} component="input" />
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

const ProfileInfoForm = ({ info, handleSubmit, reqData }) =>
  // console.log('profile info form props', props);
  info && (
    <form onSubmit={handleSubmit} className="profile-user-info-wrapper">
      <div className="profile-user-info-input">
        <div className="profile-user-img">
          <img src={info.profile.img} alt={info.firstName} />
          <span>image URL</span>
          <Field type="text" name="img" component="input" />
        </div>
        <div className="profile-user-info">
          <div className="profile-fields">
            <ProfileInputFields currentUser={info} />
            <ProfileInputFields currentUser={info} profile />
          </div>
        </div>
      </div>
      <Skills skills={info.profile.skills} info={info} />
      <div className="save-btn">
        <button type="submit">
          <RequestMessage req={reqData.request} loaded={reqData.loaded} success={reqData.success} />
        </button>
      </div>
    </form>
  );

RequestMessage.propTypes = {
  req: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

ProfileInputField.propTypes = {
  field: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'userUpdate',
})(ProfileInfoForm);
