import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { ProfileIcon, MessagesIcon, LinkedinIcon, GithubIcon } from '../../../assets/icons';
import AddMessage from './mutation'

const Icons = [<ProfileIcon />, <MessagesIcon />, <LinkedinIcon />, <GithubIcon />];

export default class ContactForm extends Component {
  state = { 
    message: '',
  }

  handleInput = e => {
    this.setState({ message: e.target.value });
  }

  render() {
    const { message } = this.state;
    const { user } = this.props;
    return (
      <Mutation mutation={AddMessage}>
      {createMessage => (
        <div className="card-col-info-contact">
          <form onSubmit={e => {
            e.preventDefault();
            createMessage( { variables: { id: user.id, message } })
          }}>
            <input type="text" value={message} onChange={e => this.handleInput(e)} />
            <button type="submit" />
          </form>
          <div className="contact-btns">
            {Icons.map((icon, i) => (
              <div className="contact-btn" data-style={i}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      )}
      </Mutation>
    );
  } 
};

ContactForm.propTypes = {
  user: PropTypes.shape.isRequired,
}
