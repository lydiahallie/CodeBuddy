import * as React from 'react';
import { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ProfileIcon, MessagesIcon, LinkedinIcon, GithubIcon } from '../../../assets/icons';
import AddMessage from './mutation'
import { User } from './types'

const icons: JSX.Element[] = [<ProfileIcon key={1} />, <MessagesIcon key={2} />, <LinkedinIcon key={3} />, <GithubIcon key={4}/>];

interface Props {
  user: User
}

interface State {
  message: string
}

export default class ContactForm extends Component<Props, State> {
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
          <form 
            onSubmit={e => {
              e.preventDefault();
              createMessage( { variables: { id: user.id, message } })
            }}
          >
            <input type="text" value={message} onChange={e => this.handleInput(e)} />
            <button type="submit" />
          </form>
          <div className="contact-btns">
            {icons.map((icon, i) => (
              <div className="contact-btn" data-style={i} key={i}>
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