import {
  AUTH_USER,
  LOGOUT,
  FETCH_USER,
} from '../constants/actionTypes';

const authReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case AUTH_USER:
    case LOGOUT:
    case FETCH_USER:
      return {
        ...state, ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
