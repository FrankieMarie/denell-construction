import axios from 'axios';

// Get project images
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILED = 'GET_IMAGES_FAILED';

export const getProjectImages = (id) => dispatch => {
  axios.get('/api/images/all')
    .then(res => {
      dispatch({
        type: GET_IMAGES_SUCCESS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_IMAGES_FAILED,
        payload: err
      }))
}