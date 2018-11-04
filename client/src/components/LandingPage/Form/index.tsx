/* eslint-disable jsx-a11y/anchor-is-valid, no-shadow */
import * as React from 'react';
import { Component } from 'react';
import ParticleWrapper from '../Particles';
import Title from '../App/title';
import InputFields from './inputField';

interface ButtonSwipeProps {
  activeBtn: string
  changeActiveBtn: (x: string) => void
}

const ButtonSwipe = ({ activeBtn, changeActiveBtn }: ButtonSwipeProps) => (
  <div className="wrap-swipe">
    <div className={`background active-${activeBtn}`} />
    <a className="btn-swipe log" onClick={() => changeActiveBtn('login')}>
      Log In
    </a>
    <a className="btn-swipe sign" onClick={() => changeActiveBtn('signup')}>
      Sign Up
    </a>
  </div>
);

interface State {
  activeBtn: string
}

class AuthForm extends Component<{}, State> {
  state = { activeBtn: 'login' };

  changeActiveBtn = value => this.setState({ activeBtn: value });

  render() {
    const { activeBtn } = this.state;
    return (
      <div className="col">
        <div className="form-wrapper">
          <ButtonSwipe activeBtn={activeBtn} changeActiveBtn={this.changeActiveBtn} />
          <div className={`form-content-wrapper expanded-${activeBtn}`}>
            <InputFields activeBtn={activeBtn} />
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <div className="content">
    <div>
      <Title />
      <AuthForm />
    </div>
    <ParticleWrapper />
  </div>
);
