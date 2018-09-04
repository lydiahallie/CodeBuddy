import axios from 'axios';
import { FETCH_USER, FETCH_POSTS, FETCH_MESSAGES } from '../constants/actionTypes';
// import { POSTS } from '../fake_backend/posts';
// import { CURRENT_USER } from '../fake_backend/users';
// import { MESSAGES } from '../fake_backend/messages';

// // Using fake backend.
// export const fetchUser = async dispatch => {
//   dispatch({ type: FETCH_USER, payload: CURRENT_USER });
// }

// export const fetchPosts = async dispatch => {
//   dispatch({ type: FETCH_POSTS, payload: POSTS });
// }

// export const fetchMessages = async (dispatch, user) => {
//   dispatch({ type: FETCH_MESSAGES, payload: MESSAGES });
// }

// Using real backend.
export const fetchUser = async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = async dispatch => {
  const res = await axios.get('/api/all_posts');
  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchMessages = async (dispatch, user) => {
  const res = await axios.get('/api/messages', user);
  dispatch({ type: FETCH_MESSAGES, payload: res.data });
};
