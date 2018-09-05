/* eslint-disable  */

import { FETCH_POSTS } from '../constants/actionTypes.js';

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state.posts = action.payload || false;
    default:
      return state;
  }
};
