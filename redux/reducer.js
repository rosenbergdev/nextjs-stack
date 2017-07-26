import { combineReducers } from 'redux'

import app from './modules/app'
import auth from './modules/auth'

export default combineReducers({
  auth,
  app
})
