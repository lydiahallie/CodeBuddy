import React, { Component } from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import shortid from 'short-id';
import PropTypes from 'prop-types';
import { postsQuery } from './query';
import InfoBox from '../styled_components/InfoBox';
import TextInput from './TextInput';

const Message = ({ msg }) =>
  msg.post && (
    <div className="dash-message">
      <div className="dash-message-info">
        <img src={msg.img} alt="" />
        <h3>
          {msg.firstName} {msg.lastName}
        </h3>
        <span>
          <span id="msg-date">{moment(msg.post.date).fromNow()}</span>
        </span>
        <button id="unfollow">Unfollow</button>
      </div>
      <p className="dash-message-msg">{msg.post.body}</p>
    </div>
  );


class MessagesTable extends Component {
  state = { body: '' };

  onPostChange = (key, e) => this.setState({ [key]: e.target.value });

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { body } = this.state;
    return (
      <Query query={postsQuery}>
      {({data}) => (
        data ? (
          <InfoBox size={400} height={300}>
            <TextInput onPostChange={this.onPostChange} body={body} />
            <div className="dash-messages">
              {data.posts && data.posts.reverse().map(msg => (
                <Message msg={msg} key={shortid.generate()} />
              ))}
            </div>
          </InfoBox>
        ) : <InfoBox size={400} height={300} />
      )}
      </Query>
    );
  }
}

MessagesTable.propTypes = {
  posts: PropTypes.object.isRequired, //eslint-disable-line
};

export default MessagesTable;
