import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { postsReducer } from './posts';
import { messagesReducer } from './messages';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: authReducer,
  form: formReducer,
  posts: postsReducer,
  messages: messagesReducer,
})