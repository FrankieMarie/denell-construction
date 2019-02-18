import axios from 'axios';

// Fetch all projects
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';

export const getAllProjects = () => dispatch => {
  axios.get('/api/projects/all')
    .then(res => {
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err =>
      dispatch({
        type: GET_PROJECTS_FAILED,
        payload: err
      })
    )
}

// Get project by id
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILED = 'GET_PROJECT_FAILED';

export const getSingleProject = (id) => dispatch => {
  axios.get(`/api/projects/${id}`)
    .then(res => {
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_PROJECT_FAILED,
        payload: err
      }))
}

// Add new Project
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILED = 'ADD_PROJECT_FAILED';

export const addProject = (payload) => dispatch => {
  axios.post('/api/projects/new')
    .then(res => {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload,
      })
    })
    .catch(err =>
      dispatch({
        type: ADD_PROJECT_FAILED,
        payload: err
      }))
}
