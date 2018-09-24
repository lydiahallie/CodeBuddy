import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { PropTypes } from 'prop-types';
import { MessageConsumer } from './Messages';
import AddMessage from './mutation'

class MessageReply extends Component {
  state = {
    messageInput: '',
  }

  handleInput = e => {
    this.setState({ messageInput: e.target.value });
  }

  render() {
    const { messageInput } = this.state;
    const { messages, activeMessage } = this.props;
    const message = messages.length && messages[activeMessage];
    return (
      <Mutation mutation={AddMessage}>
      {createMessage => (
        <div className="message-reply">
          <form onSubmit={e => {
            e.preventDefault();
            createMessage({ variables: { id: message.recipientUserId, message: messageInput }})
          }}>
            <div className="message-reply-author">
              <div className="message-reply-name">
                <span>
                  {message.author.firstName} {message.author.lastName}
                </span>
              </div>
              <img src={message.author.img} alt="" />
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

export default () => (
  <MessageConsumer>
    {({ activeMessage, messages }) => (
      <MessageReply activeMessage={activeMessage} messages={messages} />
    )}
  </MessageConsumer>
);

MessageReply.propTypes = {
  messages: PropTypes.shape.isRequired,
  activeMessage: PropTypes.number.isRequired,
}
