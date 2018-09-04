/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ParticleWrapper from '../Particles';
import Title from '../App/title';
import InputFields from './inputField';

const ButtonSwipe = ({ activeBtn, changeActiveBtn }) => (
  <div className="wrap-swipe">
    <div className={`background active-${activeBtn}`} />
    <a className="btn-swipe log" onClick={() => changeActiveBtn('login')}>Log In</a>
    <a className="btn-swipe sign" onClick={() => changeActiveBtn('signup')}>Sign Up</a>
  </div>
);

class AuthForm extends Component {
  state = { activeBtn: 'login' };

  changeActiveBtn = value => this.setState({ activeBtn: value });

  handleSubmit = values => {
    axios.post('/api/userauth', values)
      .then(() => this.props.history.push('/dashboard/dashboard')); //eslint-disable-line
  }

  render() {
    const { activeBtn } = this.state;
    return (
      <div className="col">
        <div className="form-wrapper">
          <ButtonSwipe activeBtn={activeBtn} changeActiveBtn={this.changeActiveBtn} />
          <div className={`form-content-wrapper expanded-${activeBtn}`}>
            <InputFields
              activeBtn={activeBtn}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

const Content = ({ history }) => (
  <div className="content">
    <div>
      <Title />
      <AuthForm history={history} />
    </div>
    <ParticleWrapper />
  </div>
);

ButtonSwipe.propTypes = {
  changeActiveBtn: PropTypes.func.isRequired,
  activeBtn: PropTypes.string.isRequired,
};

AuthForm.propTypes = {
  history: PropTypes.object.isRequired, //eslint-disable-line
};

Content.propTypes = {
  history: PropTypes.object.isRequired, //eslint-disable-line
};

export default Content;
