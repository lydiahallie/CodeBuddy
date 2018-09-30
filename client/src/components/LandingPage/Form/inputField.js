import React, { Component } from 'react';
// import shortid from 'short-id';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { LOGIN_FIELDS, SIGNUP_FIELDS } from './formFields';
import { loginMutation, signupMutation } from './mutation';

const LoginFields = ({ animate, handleChange, ...props }) => {
  const { password, email, history } = props;

  return (
    <Mutation mutation={loginMutation}>
      {(login, { error })=> (
        <form onSubmit={e => {
          e.preventDefault();
          login({ variables: { email, password } })
            .then(() => history.push('/dashboard/dashboard'))
        }}>
          {LOGIN_FIELDS.map((field, index) => (
            <input
              onChange={e => handleChange(field.placeholder.toLowerCase(), e)}
              // eslint-disable-next-line react/no-array-index-key
              key={`${field.type}-${index}`}
              // eslint-disable-next-line react/destructuring-assignment
              value={props[field.placeholder.toLowerCase()]}
              type={field.type}
              component="input"
              placeholder={field.placeholder}
              className={`input-lg-${index + 1} animate-${animate}`}
            />
          ))}
          <button type="submit">Submit</button>
          {error && <WarningMessage>{error.message}</WarningMessage>}
        </form> 
      )}
    </Mutation> 
  );
};

const SignupFields = ({ animate, handleChange, ...props }) => {
  const { password, email, firstName, lastName, history } = props;
  return (
    <Mutation mutation={signupMutation}>
      {(signup, { error })=> (
        <form onSubmit={e => {
          e.preventDefault();
          signup({ variables: { email, password, firstName, lastName } })
            .then(() => history.push('/dashboard/dashboard'))
        }}>
          {SIGNUP_FIELDS.map((field, index) => (
            <input
              onChange={e => handleChange(field.placeholder.toLowerCase(), e)}
              // eslint-disable-next-line react/no-array-index-key
              key={`${field.type}-${index}`}
              // eslint-disable-next-line react/destructuring-assignment
              value={props[field.placeholder.toLowerCase()]}
              type={field.type}
              component="input"
              placeholder={field.placeholder}
              className={`input-su-${index + 1} animate-${animate}`}
            />
          ))}
          <button type="submit">Submit</button>
          {error && <WarningMessage>{error.message}</WarningMessage>}
        </form> 
      )}
    </Mutation> 
  );
};

class InputFields extends Component {
  state = { 
    // eslint-disable-next-line react/no-unused-state
    email: '',
    // eslint-disable-next-line react/no-unused-state
    password: '',
    firstName: '',
    lastName: '',
    animate: false,
  };

  componentDidMount() {
    this.setState({ animate: true });
    setTimeout(() => this.setState({ animate: false }), 2000);
  }

  handleChange = ( key, e) => {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const { activeBtn, history } = this.props;
    console.log('IS HISTORY SOMETHING', history)
    // eslint-disable-next-line no-unused-vars
    const { animate, email, password, firstName, lastName } = this.state;
    const ActiveField = activeBtn === 'login' ? LoginFields : SignupFields;
    return (
      <ActiveField
        animate={animate}
        email={email}
        password={password}
        firstName={firstName}
        lastName={lastName}
        history={history}
        handleChange={this.handleChange}
      />
    );
  }
}

LoginFields.propTypes = {
  animate: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

SignupFields.propTypes = {
  animate: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  history: PropTypes.shape.isRequired,
  password: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}


InputFields.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  activeBtn: PropTypes.string.isRequired,
  history: PropTypes.shape.isRequired,
};

export default InputFields;


const WarningMessage = styled.span`
  color: #e05151;
  text-shadow: #ff0000 0px 0px 10px;
  font-size: 14px;
  margin-top: 30px;
`;
