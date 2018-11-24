import * as React from 'react';
import { Component } from 'react';
import { Query } from 'react-apollo';
// import * as moment from 'moment';
import getMessages from './query';
import MessageReply from './MessageReply';
import { Message as MessageType } from './types';

const MessageContext = React.createContext('no default');

export const MessageConsumer = props => (
  <MessageContext.Consumer {...props}>
    {context => {
      if (!context) {
        throw new Error(
          'Message compound components cannot be rendered outside the Message component'
        );
      }
      return props.children(context);
    }}
  </MessageContext.Consumer>
);

interface MessageProps {
  msg: MessageType 
  toggle: (x: number) => void
  i: number 
  activeMessage: number
}

const Message = ({ msg, toggle, i, activeMessage }: MessageProps) => (
  <div onClick={() => toggle(i)} className={`message active-${i === activeMessage}`}>
    <div className="message-info">
      <img src={msg.author.profile.img} alt="" />
    </div>
    <div className="post-content">
      <div className="post-info">
        <p id="user-msg">{`${msg.author.firstName} ${msg.author.lastName}`}</p>
        {/* <p id="user-msg-time">{moment(msg.author.date).fromNow()}</p> */}
      </div>
      <p id="msg">{msg.body}</p>
    </div>
  </div>
);

const NoMessagesInfo: () => any = () => (
  <div className="message active-true">
    <p id="msg">You have not yet received any messages. Once you do, they will appear here!</p>
  </div>
);

interface MessagesOverviewProps {
  activeMessage: number
  toggle: (x: number) => void 
  messages: MessageType[]
}

const MessagesOverview: () => any = () => (
  <MessageConsumer>
    {({ activeMessage, toggle, messages }: MessagesOverviewProps) => (
      messages && (
        <div className="overview messages">
          {!messages.length ? (
            <NoMessagesInfo />
          ) : (
            messages.map((msg: MessageType, i: number) => (
              <Message 
                activeMessage={activeMessage} 
                toggle={toggle} 
                msg={msg} 
                i={i} 
              />
            ))
          )}
        </div>
      )
    )}
  </MessageConsumer>
);

interface AllMessagesState {
  activeMessage: number
}

class AllMessages extends Component<{}, AllMessagesState> {
  state = { activeMessage: 0 };

  changeActiveMessage = val => {
    this.setState({ activeMessage: val });
  };

  render() {
    const { activeMessage } = this.state;
    return (
      <Query query={getMessages} variables={{ id: localStorage.getItem('current_user') }}>
        {({data}) => {
          const { messages } = data;
          return messages ? (
            <div className="messages-wrapper">
              <MessageContext.Provider value="test">
                <MessagesOverview />
                {messages.length && 
                  <MessageReply
                    activeMessage={activeMessage} 
                    messages={messages} 
                  />
                }
              </MessageContext.Provider>
            </div>
          ) : null
        }}
      </Query>
    );
  }
}

export default AllMessages;
