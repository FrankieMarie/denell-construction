import isEmpty from '../../validation/is-empty';
import { SET_ADMIN_SUCCESS } from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  admin: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_ADMIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        admin: action.payload
      }
    default:
      return state;
  }
}