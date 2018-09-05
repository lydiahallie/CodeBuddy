import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth';
import { postsReducer } from './posts';
import { messagesReducer } from './messages';

export default combineReducers({
  user: authReducer,
  form: formReducer,
  posts: postsReducer,
  messages: messagesReducer,
});
