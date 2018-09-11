import {
  EXPAND_MESSAGE,
  FETCH_MESSAGES,
  SEND_MESSAGE,
  DELETE_MESSAGE,
} from '../constants/actionTypes';

const messagesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case EXPAND_MESSAGE:
    case SEND_MESSAGE:
    case DELETE_MESSAGE:
    case FETCH_MESSAGES:
      return [
        ...state, ...action.payload,
      ];
    default:
      return state;
  }
};

export default messagesReducer;
