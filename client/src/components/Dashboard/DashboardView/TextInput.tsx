import * as React from 'react';
import { Component } from 'react';
import { CrossIcon } from '../../../assets/icons';

interface Props {
  body: string
  onPostChange: (x: string, y: any) => void
}

interface State {
  expanded: boolean
}

class TextInput extends Component<Props, State> {
  state = { expanded: false };

  toggleMessage = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { expanded } = this.state;
    const { body, onPostChange } = this.props;
    return (
      <div className="dash-msg-input">
        <div onClick={this.toggleMessage} className={`dash-msg-button expanded-${expanded}`}>
          <CrossIcon />
          {expanded && (
            <React.Fragment>
              <input
                style={{ color: 'black' }}
                type="textarea"
                placeholder="Message"
                onChange={e => onPostChange('body', e)}
                value={body}
              />
              <button>Add</button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default TextInput;
