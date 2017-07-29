import { put, call, takeLatest } from 'redux-saga/effects'
import fetch from 'utils/fetch'

const LOAD_USER = 'nextjs/app/LOAD_USER'
const LOAD_USER_SUCCESS = 'nextjs/app/LOAD_USER_SUCCESS'

const initialState = {
  loading: false,
  loaded: false,
  user: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        loaded: true,
        user: {
          ...action.user
        }
      }
    default:
      return state
  }
}

export function loadUser(user) {
  return {
    type: LOAD_USER,
    user
  }
}

// SAGA
function* runLoadUserWorker(action) {
  try {
    yield put({
      type: LOAD_USER_SUCCESS,
      user: action.user
    })
  } catch (error) {
    console.warn('error', error)
  }
}

export function* runLoadUserWatcher() {
  yield takeLatest(LOAD_USER, runLoadUserWorker)
}
