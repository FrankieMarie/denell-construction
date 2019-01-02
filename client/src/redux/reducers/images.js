import {
  GET_IMAGES_SUCCESS
} from '../actions/images';

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload
      }
    default:
      return state;
  }
}