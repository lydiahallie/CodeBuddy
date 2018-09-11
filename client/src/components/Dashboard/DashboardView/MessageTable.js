import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import shortid from 'short-id';
import PropTypes from 'prop-types';
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

  addPost = () => {
    const formData = this.state;
    const data = this.props;
    axios.post('/api/all_posts', { data, formData });
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const posts = Object.values(this.props.posts);
    const { body } = this.state;
    return (
      <InfoBox size={400} height={300}>
        <TextInput onPostChange={this.onPostChange} body={body} />
        <div className="dash-messages">
          {posts.reverse().map(msg => (
            <Message msg={msg} key={shortid.generate()} />
          ))}
        </div>
      </InfoBox>
    );
  }
}

MessagesTable.propTypes = {
  posts: PropTypes.object.isRequired, //eslint-disable-line
};

export default MessagesTable;
