import React, { Component } from 'react';
import { ParticleWrapper } from '../Particles';
import Title from '../App/title';
import InputFields from './inputField';
import axios from 'axios';

class AuthForm extends Component {
  constructor() {
    super();
    this.state = { activeBtn: 'login'};
  }

  changeActiveBtn = value => {
    this.setState({ activeBtn: value });
  }

  // handleSubmit = values => axios.post('/api/userauth', values)

  render() {
    const { activeBtn } = this.state;
    return (
      <div className='col'>
        <div className='form-wrapper'>
          <div className='wrap-swipe'>
            <div className={`background active-${activeBtn}`} />
            <a className='btn-swipe log' onClick={ () => this.changeActiveBtn('login') }>Log In</a>
            <a className='btn-swipe sign' onClick={ () => this.changeActiveBtn('signup') }>Sign Up</a>
          </div>
          <div className={`form-content-wrapper expanded-${activeBtn}`}>
            <InputFields 
              activeBtn={ activeBtn }
              onSubmit={ this.handleSubmit } />
          </div>
        </div>
      </div>
    );
  }
} 

export const Content = ({history}) => (
  <div className='content'>
    <div>
      <Title />
      <AuthForm history={ history } />
    </div>
    <ParticleWrapper />
  </div> 
)