import { all, call } from 'redux-saga/effects'

import { authSaga, appSaga } from 'sagas'

export default function* rootSaga() {
  yield all([call(appSaga), call(authSaga)])
}
