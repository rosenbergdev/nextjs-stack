import { put, takeLatest } from 'redux-saga/effects'

import { SAGA_DEMO, SAGA_DEMO_SUCCESS } from 'redux/modules/app/app-types'

function* runTestWorker() {
  yield put({
    type: SAGA_DEMO_SUCCESS
  })
}

export default function* runTestWatchers() {
  yield takeLatest(SAGA_DEMO, runTestWorker)
}
