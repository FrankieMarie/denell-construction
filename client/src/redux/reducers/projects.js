import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_SUCCESS,
  ADD_PROJECT_SUCCESS,
} from '../actions/projects';

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      }
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload
      }
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload
      }
    default:
      return state;
  }
}