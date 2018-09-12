import React, { Component } from 'react';
import shortid from 'short-id';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
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
    const { animate } = this.state;
    const fieldInfo =
      activeBtn === 'login'
        ? { type: LOGIN_FIELDS, class: 'lg' }
        : { type: SIGNUP_FIELDS, class: 'su' };

    return (
      <form onSubmit={handleSubmit}>
        {fieldInfo.type.map((field, index) => (
          <Field
            key={shortid.generate()}
            name={camelCase(field.placeholder)}
            type={field.type}
            component="input"
            placeholder={field.placeholder}
            className={`input-${fieldInfo.class}-${index + 1} animate-${animate}`}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputFields.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  activeBtn: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'userAuth',
})(InputFields);
