import {
  EXPAND_MESSAGE,
  FETCH_MESSAGES,
  SEND_MESSAGE,
  DELETE_MESSAGE,
} from '../constants/actionTypes.js';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case EXPAND_MESSAGE:
    case SEND_MESSAGE:
    case DELETE_MESSAGE:
    case FETCH_MESSAGES:
      console.log('yepppp definitely messages!!!', action.payload);
      return state.messages = action.payload || false;
    default:
      return state;
  }
};
