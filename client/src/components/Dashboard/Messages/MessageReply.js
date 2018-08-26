import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { MessageConsumer } from './Messages';

const MessageReply = ({ messages, activeMessage, handleSubmit }) => {
  const message = messages.length && messages[activeMessage];
  return messages.length && (
    <div className="message-reply">
      <form onSubmit={ handleSubmit } >    
        <div className="message-reply-author">
          <div className="message-reply-name">
            <span>{message.author.firstName} {message.author.lastName}</span>
          </div>
          <img src={message.author.img} alt="" />
        </div>
        <div className="message-reply-msg">
          {message.body}
        </div>
        <Field component="textarea" name="message" type="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export const MessageReplyInput = ({handleSubmit}) => (
  <MessageConsumer>
    {({activeMessage, toggle, messages}) => (
      <MessageReply 
        activeMessage={activeMessage} 
        messages={messages} 
        handleSubmit={handleSubmit} 
      />
    )}
  </MessageConsumer>
);

export default reduxForm({
  form: 'messageReply'
})(MessageReplyInput);