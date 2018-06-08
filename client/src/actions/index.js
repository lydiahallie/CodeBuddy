import axios from 'axios';
import { FETCH_USER, FETCH_POSTS, FETCH_MESSAGES } from './types.js';

export const fetchUser = async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log('res1!', res)
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchPosts = async dispatch => {
  const res = await axios.get('/api/all_posts');
  console.log('res2!', res)
  dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const fetchMessages = async (dispatch, user) => {
  const res = await axios.get('/api/messages', user);
  console.log('res3!', res)
  dispatch({ type: FETCH_MESSAGES, payload: res.data });
}