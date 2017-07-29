import { all, call } from 'redux-saga/effects'

import { runTestWatcher } from 'redux/modules/app'
import { runLoadUserWatcher } from 'redux/modules/auth'

export default function* rootSaga() {
  yield all([call(runTestWatcher), call(runLoadUserWatcher)])
}
