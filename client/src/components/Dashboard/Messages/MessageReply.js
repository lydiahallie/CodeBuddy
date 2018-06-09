import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export class MessageReplyInput extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
  }

  toggleMessage = () => this.setState({ expanded: !this.state.expanded });

  render() {
    const { messages, activeMessage, handleSubmit } = this.props;
    const message = Object.values(messages)[activeMessage]
    return message !== undefined &&
    <div className='message-reply'>
      <form onSubmit={ handleSubmit } >    
        <div className={`message-reply-author expanded-${this.state.expanded}`}>
          <div className='message-reply-name'>
            <span>{message.author.firstName} {message.author.lastName}</span>
          </div>
          <img src={message.author.img} alt='' />
        </div>
        <div className='message-reply-msg'>
          {message.body}
        </div>
        <Field component='textarea' name='message' type='text' />
        <button type='submit'>Send</button>
      </form>
    </div>
  }
};

export default reduxForm({
  form: 'messageReply'
})(MessageReplyInput)