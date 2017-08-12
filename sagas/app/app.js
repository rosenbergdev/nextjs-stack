import { put, takeLatest } from 'redux-saga/effects'

const SAGA_DEMO = 'nextjs/app/SAGA_DEMO'
const SAGA_DEMO_SUCCESS = 'nextjs/app/SAGA_DEMO_SUCCESS'

function* runTestWorker() {
  yield put({
    type: SAGA_DEMO_SUCCESS
  })
}

export default function* runTestWatchers() {
  yield takeLatest(SAGA_DEMO, runTestWorker)
}
