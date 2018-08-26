import React from 'react';
import { reduxForm, Field } from 'redux-form';
import shortid from 'short-id';
import { Skills } from './Skills';
import { Spinner, Success } from '../../../assets/spinners';

let selectOpts = ['Male', 'Female', 'Other'];
const lower = x => x.toLowerCase();

const sortInputForms = x => {
	return  x === 'complete' || 
					x === 'img' || 
					x === 'skills' ||
					x === 'password' ||
					x === 'profile' ||
					x.startsWith('_') ? false : true
  }

const RequestMessage = ({ req, loaded, success }) => (
  <span id="save-btn-span">
  { !req ? "Save Changes" :
    req && !loaded ? <React.Fragment><Spinner />Updating...</React.Fragment> :
    success && loaded ? <React.Fragment><Success />Successfully updated!</React.Fragment> :
    !success && loaded && "Something went wrong.." }
  </span>
);

const ProfileInputField = ({ field, currentUser }) => (
  <div className="profile-span">
    <span id="profile-span-text">{field}</span>
    <div>
      { field === "description" ? 
        <Field component="textarea" name={field} max="120" placeholder={currentUser[field]} /> :
        field === "gender" ? 
        <Field component="select" name={field}>
          {selectOpts.map(opt => <option key={shortid.generate()} value={lower(opt)}>{opt}</option>)}
        </Field> :
        <Field type="text" name={field} placeholder={currentUser[field]} component='input' /> }
    </div>
  </div>
);

const ProfileInputFields = ({ currentUser, profile = false }) => {
  let fields = Object.keys(profile ? currentUser.profile : currentUser);
  let user = profile ? currentUser.profile : currentUser;
  fields = fields.filter(x => sortInputForms(x));
  return fields.map(field => <ProfileInputField field={field} currentUser={user} key={shortid.generate()}/>)
}

const ProfileInfoForm = ({ info, handleSubmit, reqData, ...props }) => {
  console.log("profile info form props", props)
  return info && (
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
          <RequestMessage req={reqData.request} loaded={reqData.loaded} success={reqData.success}/>
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userUpdate'
})(ProfileInfoForm);