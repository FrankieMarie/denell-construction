import {
  GET_TESTIMONIALS_SUCCESS,
  ADD_TESTIMONIAL_SUCCESS,
} from '../actions/testimonials';

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TESTIMONIALS_SUCCESS:
      return {
        ...state,
        testimonials: action.payload
      }
    case ADD_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        testimonial: action.payload
      }
    default:
      return state;
  }
}