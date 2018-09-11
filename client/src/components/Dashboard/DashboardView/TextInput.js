import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CrossIcon } from '../../../assets/icons';

class TextInput extends Component {
  state = { expanded: false };

  toggleMessage = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { expanded } = this.state;
    const { body, onPostChange } = this.props;
    return (
      <div className="dash-msg-input">
        <div
          onClick={this.toggleMessage}
          className={`dash-msg-button expanded-${expanded}`}
        >
          <div>
            <CrossIcon />
          </div>
          {expanded && (
            <React.Fragment>
              <input
                style={{ color: 'black' }}
                type="textarea"
                placeholder="Message"
                onChange={e => onPostChange('body', e)}
                value={body}
              />
              <button onClick={this.addPost}>Add</button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  body: PropTypes.string.isRequired,
  onPostChange: PropTypes.func.isRequired,
};

export default TextInput;
