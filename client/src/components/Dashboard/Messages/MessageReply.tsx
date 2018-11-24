import * as React from 'react';
import { Component } from 'react';
import { Mutation } from 'react-apollo';
import AddMessage from './mutation';
import { Message } from './types';

interface Props {
  messages: Message[]
  activeMessage: number
}

interface State {
  messageInput: string
}

class MessageReply extends Component<Props, State> {
  state = {
    messageInput: '',
  }

  handleInput = e => {
    this.setState({ messageInput: e.target.value });
  }

  render() {
    const { messageInput } = this.state;
    const { messages, activeMessage } = this.props;
    
    let message: Message;

    if (messages.length) {
      message = messages[activeMessage];
    }

    return (
      <Mutation mutation={AddMessage}>
      {createMessage => (
        <div className="message-reply">
          <form 
            onSubmit={e => {
              e.preventDefault();
              createMessage({ 
                variables: { 
                  id: message.recipientUserId, 
                  message: messageInput 
                }
              })
            }}
          >
            <div className="message-reply-author">
              <div className="message-reply-name">
                <span>
                  {message.author.firstName} {message.author.lastName}
                </span>
              </div>
              <img src={message.author.profile.img} alt="" />
            </div>
            <div className="message-reply-msg">{message.body}</div>
            <input value={messageInput} onChange={e => this.handleInput(e)} />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      </Mutation>
    );
  }
};

export default ({ activeMessage, messages }: Props) => (
  <MessageReply activeMessage={activeMessage} messages={messages} />
);
