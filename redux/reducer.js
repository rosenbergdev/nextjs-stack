import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import app from './modules/app/app-reducer'
import auth from './modules/auth/auth-reducer'

export default combineReducers({
  form: formReducer,
  auth,
  app
})
