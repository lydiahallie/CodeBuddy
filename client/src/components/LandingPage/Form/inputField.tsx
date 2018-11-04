import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import shortid from 'short-id';
import { Mutation } from 'react-apollo';
import camelCase from 'camelcase'
import { withRouter } from 'react-router-dom';
// import { reduxForm, Field } from 'redux-form';
import { LOGIN_FIELDS, SIGNUP_FIELDS } from './formFields';
import { loginMutation, signupMutation } from './mutation';
import { string } from 'prop-types';

interface LoginFieldsProps {
  animate: boolean
  handleChange: (x: string, y: any) => void
  password: string 
  email: string
  firstName: string
  lastName: string
}

const LoginFields = ({ animate, handleChange, ...props }: LoginFieldsProps & RouteComponentProps) => {
  const { password, email } = props;
  return (
    <Mutation mutation={loginMutation}>
      {(login, { error })=> (
        <form onSubmit={e => {
          e.preventDefault();
          login({ variables: { email, password } })
            .then(() => {
              props.history.push('http://localhost:3000/dashboard/dashboard')
            }); 
        }}>
          {LOGIN_FIELDS.map((field, index) => (
            <input
              onChange={e => handleChange(field.placeholder.toLowerCase(), e)}
              // eslint-disable-next-line react/no-array-index-key
              key={`${field.type}-${index}`}
              // eslint-disable-next-line react/destructuring-assignment
              value={props[field.placeholder.toLowerCase()]}
              type={field.type}
              placeholder={field.placeholder}
              className={`input-lg-${index + 1} animate-${animate}`}
            />
          ))}
          <button type="submit">Submit</button>
          {error && <span>{error}</span>}
        </form> 
      )}
    </Mutation> 
  );
};

const LoginFieldsWrapper =  withRouter(LoginFields)

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
              onChange={e => handleChange(camelCase(field.placeholder), e)}
              // eslint-disable-next-line react/no-array-index-key
              key={`${field.type}-${index}`}
              // eslint-disable-next-line react/destructuring-assignment
              value={props[camelCase(field.placeholder)]}
              type={field.type}
              placeholder={field.placeholder}
              className={`input-su-${index + 1} animate-${animate}`}
            />
          ))}
          <button type="submit">Submit</button>
          {error && <span>{error}</span>}
        </form> 
      )}
    </Mutation> 
  );
};

const SignupFieldsWrapper = withRouter(SignupFields)

interface Props {
  activeBtn: string
}

interface State {
  email: string
  password: string
  firstName: string 
  lastName: string
  animate: boolean
}

class InputFields extends Component<Props, State> {
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

  handleChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const { activeBtn } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { animate, email, password, firstName, lastName } = this.state;
    const ActiveField = activeBtn === 'login' ? LoginFieldsWrapper : SignupFieldsWrapper;
    return (
      <ActiveField
        animate={animate}
        email={email}
        password={password}
        firstName={firstName}
        lastName={lastName}
        handleChange={this.handleChange}
      />
    );
  }
}

export default InputFields;
