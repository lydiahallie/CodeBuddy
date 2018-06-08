import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { postsReducer } from './postsReducer';
import { messagesReducer } from './messagesReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: authReducer,
  form: formReducer,
  posts: postsReducer,
  messages: messagesReducer,
})