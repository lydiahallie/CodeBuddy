import {
  LOGIN,
  REGISTER,
  LOGOUT,
  FETCH_USER,
} from '../constants/actionTypes.js';

export const authReducer = (state = {}, action) => {
  console.log('payload', action.payload);
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
    case REGISTER:
    case FETCH_USER:
      return state.user = action.payload || false;
    default:
      return state;
  }
};
