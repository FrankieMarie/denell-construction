import { combineReducers } from 'redux';
import auth from './auth';
import projects from './projects';
import images from './images';

export default combineReducers({
  auth,
  projects,
  images,
});