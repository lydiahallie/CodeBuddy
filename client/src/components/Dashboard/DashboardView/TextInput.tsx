import * as React from 'react';
import { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CrossIcon } from '../../../assets/icons';


const ADD_MESSAGE = gql`
  mutation AddMessage($id: ID! $post: String!) {
    createPost(id: $id post: $post) {
      id
    }
  }
`

interface Props {
  body: string
  onPostChange: (x: any) => void
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
      <Mutation 
        mutation={ADD_MESSAGE} 
        variables={{ 
          id: localStorage.getItem('current_user'), 
          post: body
        }}
      >
      {createMessage => (
        <div className="dash-msg-input">
          <div className={`dash-msg-button expanded-${expanded}`}>
            <div onClick={this.toggleMessage}>
              <CrossIcon />
            </div>
            {expanded && (
              <React.Fragment>
                <input
                  style={{ color: 'black' }}
                  type="textarea"
                  placeholder="Message"
                  onChange={e => onPostChange(e)}
                  value={body}
                />
                <button onClick={() => createMessage()}>Add</button>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
      </Mutation>
    );
  }
}

export default TextInput;
