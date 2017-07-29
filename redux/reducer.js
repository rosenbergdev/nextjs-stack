import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import app from './modules/app'
import auth from './modules/auth'

export default combineReducers({
  form: formReducer,
  auth,
  app
})
