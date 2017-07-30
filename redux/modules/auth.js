import { all, put, call, takeLatest } from 'redux-saga/effects'
import Router from 'next/router'

import api from 'utils/api.js'

const LOAD_USER = 'nextjs/app/LOAD_USER'
const LOAD_USER_SUCCESS = 'nextjs/app/LOAD_USER_SUCCESS'

const SAVE_USER = 'nextjs/app/SAVE_USER'
const SAVE_USER_SUCCESS = 'nextjs/app/SAVE_USER_SUCCESS'

const LOGOUT_USER = 'nextjs/app/LOGOUT_USER'
const LOGOUT_USER_SUCCESS = 'nextjs/app/LOGOUT_USER_SUCCESS'

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
    case SAVE_USER:
      return {
        ...state,
        loading: true
      }
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user
      }
    case LOGOUT_USER:
      return {
        ...state,
        loading: true
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        user: {}
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

export function saveUser(user) {
  return {
    type: SAVE_USER,
    user
  }
}

export function logout() {
  return {
    type: LOGOUT_USER
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

function* runSaveUserWorker(action) {
  try {
    const res = yield call(api, '/save-user', {
      method: 'post',
      data: action.user
    })

    yield put({
      type: SAVE_USER_SUCCESS,
      user: res.data
    })
  } catch (error) {
    console.warn('error', error)
  }
}

function* runLogoutUserWorker() {
  try {
    yield call(api, '/logout', {
      method: 'post'
    })

    Router.push('/')

    yield put({
      type: LOGOUT_USER_SUCCESS
    })
  } catch (error) {
    console.warn('error', error)
  }
}

export function* runLoadUserWatcher() {
  yield all([
    takeLatest(LOAD_USER, runLoadUserWorker),
    takeLatest(SAVE_USER, runSaveUserWorker),
    takeLatest(LOGOUT_USER, runLogoutUserWorker)
  ])
}
