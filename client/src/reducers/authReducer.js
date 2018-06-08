import { FETCH_USER } from '../actions/types.js';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return state.user = action.payload || false
    default: 
      return state;
  }
}