import { put, takeLatest } from 'redux-saga/effects'

// ACTION TYPES
const SAGA_DEMO = 'nextjs/app/SAGA_DEMO'
const SAGA_DEMO_SUCCESS = 'nextjs/app/SAGA_DEMO_SUCCESS'

const initialState = {
  saga_demo: {
    id: 10
  }
}

// REDUCER
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAGA_DEMO:
      return Object.assign({}, state, {
        saga_demo: {
          id: action.id
        }
      })
    case SAGA_DEMO_SUCCESS:
      console.log('saga demo success')
      return state
    default:
      return state
  }
}

// ACTIONS
export function sageDemoTest(id) {
  return {
    type: SAGA_DEMO,
    id
  }
}

// SAGA
function* runTestWorker() {
  yield put({
    type: SAGA_DEMO_SUCCESS
  })
}

export function* runTestWatchers() {
  yield takeLatest(SAGA_DEMO, runTestWorker)
}
