import { all, call } from 'redux-saga/effects'

import { runTestWatcher } from 'redux/modules/app'

export default function* rootSaga() {
  yield all([call(runTestWatcher)])
}
