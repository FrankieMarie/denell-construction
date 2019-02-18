import axios from 'axios';

// Fetch all testimonials
export const GET_TESTIMONIALS_SUCCESS = 'GET_TESTIMONIALS_SUCCESS';
export const GET_TESTIMONIALS_FAILED = 'GET_TESTIMONIALS_FAILED';

export const getAllTestimonials = () => dispatch => {
  axios.get('/api/testimonials/all')
    .then(res => {
      dispatch({
        type: GET_TESTIMONIALS_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err =>
      dispatch({
        type: GET_TESTIMONIALS_FAILED,
        payload: err
      })
    )
}

// Add new Testimonial
export const ADD_TESTIMONIAL_SUCCESS = 'ADD_TESTIMONIAL_SUCCESS';
export const ADD_TESTIMONIAL_FAILED = 'ADD_TESTIMONIAL_FAILED';

export const addProject = (payload) => dispatch => {
  axios.post('/api/testimonials/new')
    .then(res => {
      dispatch({
        type: ADD_TESTIMONIAL_SUCCESS,
        payload,
      })
    })
    .catch(err =>
      dispatch({
        type: ADD_TESTIMONIAL_FAILED,
        payload: err
      }))
}