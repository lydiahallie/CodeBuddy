import { FETCH_MESSAGES } from '../actions/types.js';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return state.messages = action.payload || false
    default: 
      return state;
  }
}