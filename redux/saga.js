import { all, call } from 'redux-saga/effects'

import { runTestWatchers } from './modules/app'
import { runLoadUserWatchers } from './modules/auth/auth-sagas'

export default function* rootSaga() {
  yield all([call(runTestWatchers), call(runLoadUserWatchers)])
}
