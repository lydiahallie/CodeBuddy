import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import shortid from 'short-id';
import InfoBox from '../styled_components/InfoBox';
import { CrossIcon } from '../../../assets/icons';

const Message = ({ msg }) => (
  msg.post
  && (
  <div className="dash-message">
    <div className="dash-message-info">
      <img src={msg.img} alt="" />
      <h3>
        {msg.firstName}
        {' '}
        {msg.lastName}
      </h3>
      <span><span id="msg-date">{moment(msg.post.date).fromNow()}</span></span>
      <button id="unfollow">Unfollow</button>
    </div>
    <p className="dash-message-msg">{msg.post.body}</p>
  </div>
  )
);

class TextInput extends Component {
  state = { expanded: false };

  toggleMessage = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="dash-msg-input">
        <div onClick={this.toggleMessage} className={`dash-msg-button expanded-${expanded}`}>
          <div>
            <CrossIcon />
          </div>
          {expanded
            && (
            <React.Fragment>
              <input
                style={{ color: 'black' }}
                type="textarea"
                placeholder="Message"
                onChange={e => this.onPostChange('body', e)}
                value={this.state.body}
              />
              <button onClick={this.addPost}>Add</button>
            </React.Fragment>
            )
          }
        </div>
      </div>
    );
  }
}

class MessagesTable extends Component {
  state = { body: '' };

	onPostChange = (key, e) => this.setState({ [key]: e.target.value })

  addPost = () => {
    const formData = this.state;
    const data = this.props;
    axios.post('/api/all_posts', { data, formData });
  }

  render() {
    const posts = Object.values(this.props.posts);
    return (
      <InfoBox size={400} height={300}>
        <TextInput />
        <div className="dash-messages">
          {posts.reverse().map(msg => <Message msg={msg} key={shortid.generate()} />)}
        </div>
      </InfoBox>
    );
  }
}

export default MessagesTable;
