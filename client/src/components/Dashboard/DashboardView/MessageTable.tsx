import * as React from 'react';
import { Component } from 'react';
import { Query } from 'react-apollo';
import * as moment from 'moment';
import shortid from 'short-id';
import { postsQuery } from './query';
import InfoBox from '../styled_components/InfoBox';
import TextInput from './TextInput';

interface Post {
  date: string
  body: string
}

interface Author {
  profile: {
    img: string
  }
  firstName: string
  lastName: string
}
interface Message {
  author: Author
  post: Post 
}

interface MessageProps {
  msg: Message
}

const Message = ({ msg }: MessageProps) =>
  msg.post && (
    <div className="dash-message">
      <div className="dash-message-info">
        <img src={msg.author.profile.img} alt="" />
        <h3>
          {msg.author.firstName} {msg.author.lastName}
        </h3>
        <span>
          <span id="msg-date">{moment(msg.post.date).fromNow()}</span>
        </span>
        <button id="unfollow">Unfollow</button>
      </div>
      <p className="dash-message-msg">{msg.post.body}</p>
    </div>
  );

class MessagesTable extends Component<{}, {
  body: string
}> {
  state = { body: '' };

  onPostChange = (e: any) => this.setState({ body: e.target.value });

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { body } = this.state;
    return (
      <Query query={postsQuery}>
      {({data}) => {
        return data ? (
          <InfoBox size={400} height={300}>
            <TextInput onPostChange={this.onPostChange} body={body} />
            <div className="dash-messages">
              {data.posts && data.posts.reverse().map((msg: Message) => (
                <Message msg={msg} key={shortid.generate()} />
              ))}
            </div>
          </InfoBox>
        ) : <InfoBox size={400} height={300} />
      }}
      </Query>
    );
  }
}

export default MessagesTable;
