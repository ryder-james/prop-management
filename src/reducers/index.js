import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import header from './headerReducer';
import auth from './authReducer';
import newsletters from './newsletterReducer';
import requests from './requestsReducer';

const rootReducer = combineReducers({
  header,
  form,
  auth,
  newsletters,
  requests
});

export default rootReducer;