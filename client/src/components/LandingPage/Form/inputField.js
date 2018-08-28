import React, { Component } from 'react';
import shortid from 'short-id';
import { reduxForm, Field } from 'redux-form';
import { LOGIN_FIELDS, SIGNUP_FIELDS } from './formFields';

class InputFields extends Component {
  state = { animate: false };

  componentDidMount() {
    this.setState({ animate: true });
    setTimeout(() => this.setState({ animate: false }), 2000);
  }

  render() {
    const { handleSubmit, activeBtn } = this.props;
    const fieldInfo = activeBtn === 'login'
      ? { type: LOGIN_FIELDS, class: 'lg' }
      : { type: SIGNUP_FIELDS, class: 'su' };

    return (
      <form onSubmit={handleSubmit}>
        {fieldInfo.type.map((field, index) => (
          <Field
            key={shortid.generate()}
            name={field.placeholder.toLowerCase()}
            type={field.type}
            component="input"
            placeholder={field.placeholder}
            className={`input-${fieldInfo.class}-${index + 1} animate-${this.state.animate}`}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'userAuth',
})(InputFields);
