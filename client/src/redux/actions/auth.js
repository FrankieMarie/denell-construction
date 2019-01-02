import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const SET_ADMIN_SUCCESS = 'SET_ADMIN_SUCCESS';
export const SET_ADMIN_FAILED = 'SET_ADMIN_FAILED';

// Login Admin admin - get token
export const loginAdmin = (userData) => dispatch => {
  axios.post('/api/admin/login', userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setAdmin(decoded))
    })
    .catch(err =>
      dispatch({
        type: SET_ADMIN_FAILED,
        payload: err.response.data
      })
    )
}

// Set logged in Admin
export const setAdmin = (decoded) => {
  return {
    type: SET_ADMIN_SUCCESS,
    payload: decoded
  }
}

// Log out
export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setAdmin({}))
}