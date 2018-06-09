import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import MessageReply from './MessageReply';

const Message = ({msg, onClick, i, activeMessage}) => (
  <div onClick={ i => onClick(i) } className={`message active-${i === activeMessage}`}>
    <div className='message-info'>
      <img src={ msg.author.img } alt='' />
    </div>
    <div className='post-content'>
      <div className='post-info'>
        <p id='user-msg'>{msg.author.firstName} {msg.author.lastName}</p>
        <p id='user-msg-time'>{moment(msg.author.date).fromNow()}</p>
      </div> 
      <p id="msg">{msg.body}</p>
    </div>
  </div>
);

const MessagesOverview = ({changeActiveMessage, messages, activeMessage}) => {
  let messagesData =  Object.values(messages);
  return (
    <div className='overview messages'>
    { messagesData.map((msg, i) => 
      <Message 
        activeMessage={ activeMessage }
        onClick={ changeActiveMessage }
        msg={msg} 
        i={i}/>) }
    </div>
  );
};

class AllMessages extends Component {
  constructor() {
    super();
    this.state = { activeMessage: 0 }
  }

  changeActiveMessage = val => this.setState({ activeMessage: val });

  onSubmit = values => {
    const { messages, currentUser } = this.props;
    const { activeMessage } = this.state;
    const user = Object.values(messages)[activeMessage]['author'];
    axios.post('/api/add_message', { values, user, currentUser });
  }

  render() {
    const { messages } = this.props;
    return (
      <div className='messages-wrapper'>
        <MessagesOverview 
          activeMessage={ this.state.activeMessage }
          messages={ messages } 
          changeActiveMessage={ this.changeActiveMessage } />
        <MessageReply 
          onSubmit={ this.onSubmit }
          messages={ this.props.messages }
          activeMessage={ this.state.activeMessage } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user,
    messages: state.messages
  }
}

export default connect(mapStateToProps)(AllMessages)