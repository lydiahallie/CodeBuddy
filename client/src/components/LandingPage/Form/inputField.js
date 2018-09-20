/* eslint-disable */
import React, { Component } from 'react';
import shortid from 'short-id';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { LOGIN_FIELDS, SIGNUP_FIELDS } from './formFields';


const emailInput = (<Field
  key={shortid.generate()}
  name="Email"
  type="text"
  component="input"
  placeholder="Email"
  className="input-lg-1 animate-true"
/>);

const passwordInput = (<Field
  key={shortid.generate()}
  name="Password"
  type="password"
  component="input"
  placeholder="Password"
  className="input-lg-2 animate-true"
/>);

const firstNameInput = (<Field
    key={shortid.generate()}
    name="Firstname"
    type="text"
    component="input"
    placeholder="Firstname"
    className="input-su-1 animate-true"
/>);

const lastNameInput = (
  <Field
    key={shortid.generate()}
    name="Lastname"
    type="text"
    component="input"
    placeholder="Lastname"
    className="input-su-2 animate-true"
  />
);

const emailInputSU = (<Field
  key={shortid.generate()}
  name="Email"
  type="text"
  component="input"
  placeholder="Email"
  className="input-su-3 animate-true"
/>);

const passwordInputSU = (<Field
  key={shortid.generate()}
  name="Password"
  type="password"
  component="input"
  placeholder="Password"
  className="input-su-4 animate-true"
/>);

class InputFields extends Component {
  state = {};
  render() {
    const { handleSubmit, activeBtn } = this.props;
    const fieldInfo =
      activeBtn === "login"
        ? { type: LOGIN_FIELDS, class: "lg" }
        : { type: SIGNUP_FIELDS, class: "su" };

    return (
      <form onSubmit={handleSubmit}> 
        {activeBtn === 'login' && emailInput}
        {activeBtn === 'login' && passwordInput}
        {activeBtn !== 'login' && firstNameInput}
        {activeBtn !== 'login' && lastNameInput}
        {activeBtn !== 'login' && emailInputSU}
        {activeBtn !== 'login' && passwordInputSU}
        {/* {activeBtn === 'login' && LastNameInput} */}

        {/* {fieldInfo.type.map((field, index) => (
          <Field
            key={shortid.generate()}
            name={field.placeholder.toLowerCase()}
            type={field.type}
            component="input"
            placeholder={field.placeholder}
            className={`input-${fieldInfo.class}-${index + 1} animate-${animate}`}
          />
        ))} */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputFields.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  activeBtn: PropTypes.string.isRequired
};

export default reduxForm({
  form: "userAuth"
})(InputFields);
